"use client";
import Image from "next/image";
import React, { useEffect, useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@utils/tw";
import { useAppDispatch, useAppSelector } from "@store/index";
import { setHasFullScreen, addPageToCache } from "@store/app-slice";

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

export default function NavigationDesktop({
    className,
}: {
    className?: string;
}) {
    const dispatch = useAppDispatch();
    const pathName = usePathname();
    const router = useRouter();

    const pageCached = useAppSelector((state) => state.app.pageCached);

    const [prevPath, setPrevPath] = useState(pathName);
    const [isPageChanging, setIsPageChanging] = useState(false);
    const [urlChanging, setUrlChanging] = useState("");
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        if (prevPath !== pathName) {
            dispatch(setHasFullScreen(true));
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

        startTransition(() => {
            router.push(href);
            dispatch(addPageToCache(href));
        });
    }

    return (
        <MotionContainer
            type="blur"
            className={cn(
                "fixed bottom-2 right-1/2 left-1/2 flex items-center justify-center",
                className,
            )}
        >
            <Dock direction="middle" className="bg-[#E0E0E0] dark:bg-[#2C2C2E]">
                {DATA_MENUS.home.map((item) => (
                    <DockIcon key={item.label}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div
                                    onClick={() => handleOpenScreen(item.href)}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                        "size-12 rounded-full relative",
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
                                    {pageCached.includes(item.href) && (
                                        <div className="absolute bottom-0 w-1 h-1 transform -translate-x-1/2 bg-black rounded-full left-1/2" />
                                    )}
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{item.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
                <Separator orientation="vertical" className="h-full w-[1px] bg-gradient-to-b from-transparent via-gray-500 to-transparent opacity-50 backdrop-blur-md" />
                {Object.entries(DATA_MENUS.main).map(([name, item]) => (
                    <DockIcon key={name}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div
                                    onClick={() => handleOpenScreen(item.url)}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                        "size-12 rounded-full relative",
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
                                    {pageCached.includes(item.url) && (
                                        <div className="absolute bottom-0 w-1 h-1 transform -translate-x-1/2 bg-black rounded-full left-1/2" />
                                    )}
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
                <Separator orientation="vertical" className="h-full w-[1px] bg-gradient-to-b from-transparent via-gray-500 to-transparent opacity-50 backdrop-blur-md" />
                {Object.entries(DATA_MENUS.extends).map(([name, item]) => (
                    <DockIcon key={name}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div
                                    onClick={() => handleOpenScreen(item.url)}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                        "size-12 rounded-full relative",
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
                                    {pageCached.includes(item.url) && (
                                        <div className="absolute bottom-0 w-1 h-1 transform -translate-x-1/2 bg-black rounded-full left-1/2" />
                                    )}
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
