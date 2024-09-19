"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";

import { cn } from "@utils/tw";
import { useAppDispatch, useAppSelector } from "@store/index";
import { addPageToCache, setHasFullScreen } from "@store/app-slice";

import { buttonVariants } from "@ui/atoms/button";

import { Dock, DockIcon } from "@ui/molecules/navigation/dock";
import { Separator } from "@ui/molecules/other-utils/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@ui/molecules/other-utils/tooltip";

import MotionContainer from "@ui/molecules/frame/dynamic-contain";

const DATA_DESKTOP_MENUS = {
    home: [
        {
            href: "/about-me",
            icon: "/icon-navigation/icon-about.png",
            label: "About Me",
        },
    ],
    main: {
        Blog: {
            name: "Blog",
            url: "/blog",
            icon: "/icon-navigation/icon-blog.png",
        },
        Project: {
            name: "Project",
            url: "/project",
            icon: "/icon-navigation/icon-project.png",
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
            icon: "/icon-navigation/icon-github.png",
        },
        Resume: {
            name: "Resume",
            url: "/extensions/resume",
            icon: "/icon-navigation/icon-resume.png",
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
    //   const router = useViewTransitionRouter();
    const router = useTransitionRouter();

    const pageCached = useAppSelector((state) => state.app.pageCached);

    const [prevPath, setPrevPath] = useState(pathName);
    const [isPageChanging, setIsPageChanging] = useState(false);
    const [urlChanging, setUrlChanging] = useState("");

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

    const handleOpenScreen = useCallback(
        async (e: React.MouseEvent<HTMLDivElement>, href: string) => {
            e.preventDefault();

            if (pageCached.includes(href)) {
                router.push(href);
                return;
            }

            setIsPageChanging(true);
            setUrlChanging(href);

            setTimeout(() => {
                router.push(href);
                dispatch(addPageToCache(href));
            }, 3000);
        },
        [pageCached, router],
    );

    return (
        <MotionContainer
            type="blur"
            className={cn(
                "fixed bottom-2 right-1/2 left-1/2 flex items-center justify-center",
                className,
            )}
        >
            <Dock direction="middle" className="bg-[#E0E0E0] dark:bg-[#2C2C2E]">
                {DATA_DESKTOP_MENUS.home.map((item) => (
                    <DockIcon key={item.label}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div
                                    onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                                        handleOpenScreen(e, item.href)
                                    }
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
                                        width={30}
                                        height={30}
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
                <Separator
                    orientation="vertical"
                    className="h-full w-[1px] bg-gradient-to-b from-transparent via-gray-500 to-transparent opacity-50 backdrop-blur-md"
                />
                {Object.entries(DATA_DESKTOP_MENUS.main).map(([name, item]) => (
                    <DockIcon key={name}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div
                                    onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                                        handleOpenScreen(e, item.url)
                                    }
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
                                        width={30}
                                        height={30}
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
                <Separator
                    orientation="vertical"
                    className="h-full w-[1px] bg-gradient-to-b from-transparent via-gray-500 to-transparent opacity-50 backdrop-blur-md"
                />
                {Object.entries(DATA_DESKTOP_MENUS.extends).map(([name, item]) => (
                    <DockIcon key={name}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div
                                    onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                                        handleOpenScreen(e, item.url)
                                    }
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
                                        width={30}
                                        height={30}
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
