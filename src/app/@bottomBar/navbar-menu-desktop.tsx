"use client";
import React from "react";
import Link from "next/link";

import { cn } from "@/lib/tw";
import {
  Bot,
  FolderOpenDot,
  GithubIcon,
  HomeIcon,
  Newspaper,
  NotebookText
} from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DATA = {
  home: [
    { href: "/", icon: <HomeIcon strokeWidth={1.75} />, label: "Home" },
  ],
  main: {
    Blog: {
      name: "Blog",
      url: "/blog",
      icon: <Newspaper strokeWidth={1.75} />,
    },
    Project: {
      name: "Project",
      url: "/project",
      icon: <FolderOpenDot strokeWidth={1.75} />
    },
  },
  extends: {
    ChatBot: {
      name: "ChatBot",
      url: "/extensions/chatbot",
      icon: <Bot strokeWidth={1.75} />
    },
    GitRoll: {
      name: "GitRoll",
      url: "/extensions/git-roll",
      icon: <GithubIcon strokeWidth={1.75} />,
    },
    Resume: {
      name: "Resume",
      url: "/extensions/resume",
      icon: <NotebookText strokeWidth={1.75} />,
    },
  },
};

export function NavbarMenuDesktop({ className }: { className?: string }) {
  return (
    <div className="fixed bottom-5 flex items-center justify-center">
      <Dock direction="middle">
        {DATA.home.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full",
                  )}
                >
                  {item.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(DATA.main).map(([name, item]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.url}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full",
                  )}
                >
                  {item.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(DATA.extends).map(([name, item]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.url}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full",
                  )}
                >
                  {item.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}
