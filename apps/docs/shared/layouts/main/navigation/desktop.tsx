"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@utils/tw";
import { useAppDispatch } from "@store/index";
import { setHasFullScreen, setIsOpenScreen } from "@store/app-slice";

import { buttonVariants } from "@ui/atoms/button";

import { Dock, DockIcon } from "@ui/molecules/navigation/dock";
import { Separator } from "@ui/molecules/other-utils/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@ui/molecules/other-utils/tooltip";
import MotionContainer from "@ui/molecules/frame/dynamic-contain";

const DATA_MENUS = {
  home: [{ href: "/", icon: "/icon-navigation/home.svg", label: "Home" }],
  main: {
    Blog: {
      name: "Blog",
      url: "/blog",
      icon: "/icon-navigation/blog.svg",
    },
    Project: {
      name: "Project",
      url: "/project",
      icon: "/icon-navigation/project.svg",
    },
  },
  extends: {
    ChatBot: {
      name: "ChatBot",
      url: "/extensions/chatbot",
      icon: "/icon-navigation/chat.svg",
    },
    GitRoll: {
      name: "GitRoll",
      url: "/extensions/git-roll",
      icon: "/icon-navigation/github.svg",
    },
    Resume: {
      name: "Resume",
      url: "/extensions/resume",
      icon: "/icon-navigation/resume.svg",
    },
  },
};

export function NavigationDesktop({ className }: { className?: string }) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathName = usePathname();
  const [prevPath, setPrevPath] = useState(pathName);
  const [isPageChanging, setIsPageChanging] = useState(false);
  const [urlChanging, setUrlChanging] = useState("");

  useEffect(() => {
    if (prevPath !== pathName) {
      dispatch(setHasFullScreen(true));
      dispatch(setIsOpenScreen(true));
      setIsPageChanging(true);
      setPrevPath(pathName);
    } else {
      setIsPageChanging(false);
      setUrlChanging("");
    }
  }, [pathName, prevPath, dispatch]);

  function handleOpenScreen(href: string) {
    setIsPageChanging(true);
    setUrlChanging(href);
    router.push(href);
  }

  return (
    <MotionContainer
      type="blur"
      className={cn(
        "fixed bottom-5 right-1/2 left-1/2 flex items-center justify-center",
        className,
      )}
    >
      <Dock direction="middle">
        {DATA_MENUS.home.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  onClick={() => handleOpenScreen(item.href)}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full",
                    urlChanging === item.href && isPageChanging
                      ? "animate-bounce"
                      : "",
                  )}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={24}
                    height={24}
                    priority={true}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(DATA_MENUS.main).map(([name, item]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  onClick={() => handleOpenScreen(item.url)}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full",
                    urlChanging === item.url && isPageChanging
                      ? "animate-bounce"
                      : "",
                  )}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={24}
                    height={24}
                    priority={true}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(DATA_MENUS.extends).map(([name, item]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  onClick={() => handleOpenScreen(item.url)}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full",
                    urlChanging === item.url && isPageChanging
                      ? "animate-bounce"
                      : "",
                  )}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={24}
                    height={24}
                    priority={true}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </MotionContainer>
  );
}
