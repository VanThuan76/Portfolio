"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CircleArrowUp, CloudSunRain } from "lucide-react";
import { cn } from "@shared/lib/tw";

import { getTime } from "@shared/helpers/get-time";
import { BACKGROUNDS } from "@shared/constants";

const DATA_MOBILE_MENUS = [
    {
        href: "/setting",
        icon: "/icon-navigation/icon-setting.png",
        label: "Setting",
    },
    {
        href: "/about-me",
        icon: "/icon-navigation/icon-about.png",
        label: "About Me",
    },
    { href: "/blog", icon: "/icon-navigation/icon-blog.png", label: "Blog" },
    {
        href: "/project",
        icon: "/icon-navigation/icon-project.png",
        label: "Project",
    },
    {
        href: "/extensions/chatbot",
        icon: "/icon-navigation/chat.svg",
        label: "ChatBot",
    },
    {
        href: "/extensions/git-roll",
        icon: "/icon-navigation/icon-github.png",
        label: "GitRoll",
    },
    {
        href: "/extensions/resume",
        icon: "/icon-navigation/icon-resume.png",
        label: "Resume",
    },
];

const Page = () => {
    const [time, setTime] = useState(getTime());
    const [selectedBackground, setSelectedBackground] = useState("");

    useEffect(() => {
        let timeout: any;

        const updateTime = () => {
            const now = new Date();
            const secondsUntilNextMinute = 60 - now.getSeconds();
            setTime(getTime());
            timeout = setTimeout(updateTime, secondsUntilNextMinute * 1000);
        };

        updateTime();

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (BACKGROUNDS && BACKGROUNDS.length > 0) {
            const randomIndex = Math.floor(Math.random() * BACKGROUNDS.length);
            const randomBackground = BACKGROUNDS[randomIndex];

            if (randomBackground && randomBackground) {
                setSelectedBackground(randomBackground);
            }
        }
    }, [BACKGROUNDS]);

    return (
        <div className="relative w-screen h-screen p-4 md:hidden">
            <div className="flex items-center justify-between w-full gap-2">
                <div className="relative z-20 flex-1 gap-2 overflow-hidden h-52 group max-w-52 rounded-3xl">
                    <div className="relative flex items-center w-full h-full">
                        {selectedBackground && (
                            <Image
                                width={1280}
                                height={900}
                                src={selectedBackground}
                                alt="Background"
                                className="h-full w-full rounded-3xl object-cover transition-all group-hover:scale-105 group-hover:blur-[1px]"
                            />
                        )}
                    </div>
                    <div
                        className={cn(
                            "absolute right-0 top-0 z-10 flex h-full w-fit flex-col items-center justify-center text-8xl font-black tabular-nums tracking-tighter text-white transition-all duration-500 group-hover:right-1/4",
                        )}
                    >
                        <div className="flex">
                            <div>{time.hoursTens}</div>
                            <div>{time.hoursOnes}</div>
                        </div>
                        <div className="flex">
                            <div>{time.minutesTens}</div>
                            <div>{time.minutesOnes}</div>
                        </div>
                    </div>
                </div>

                <div className="relative z-20 flex flex-col flex-1 p-2 h-52 max-w-52 rounded-3xl bg-opacity-10 bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-padding backdrop-blur-sm backdrop-filter dark:from-gray-700 dark:to-gray-900">
                    <div className="flex flex-col flex-1 gap-2 dark:text-white">
                        <p className="city opacity-70">Tokyo</p>
                        <div className="flex items-center">
                            <CloudSunRain className="w-10 h-10" />
                            <p className="text-5xl font-black">19&deg;</p>
                        </div>
                        <p className="feels-like opacity-70">Feels like 21&deg;</p>
                    </div>
                    <div className="flex justify-between py-1 bg-gray-400 rounded-xl bg-opacity-30 bg-clip-padding backdrop-blur-lg backdrop-filter">
                        <div className="flex items-center gap-1 px-2 text-orange-500 dark:text-orange-200">
                            <CircleArrowUp className="w-5 h-5" />
                            24&deg;
                        </div>
                        <p className="text-black opacity-50">|</p>
                        <div className="flex items-center gap-1 px-3 text-green-800 dark:text-green-200">
                            <CircleArrowUp className="w-5 h-5 rotate-180" />
                            9&deg;
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid items-center justify-center w-full grid-cols-4 gap-4">
                {DATA_MOBILE_MENUS.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="z-20 flex flex-col items-center justify-center p-2 mt-10 transition-transform transform hover:scale-105"
                    >
                        <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-xl">
                            <Image
                                width={200}
                                height={200}
                                src={item.icon}
                                alt={item.label}
                                className="object-contain w-14 h-14"
                            />
                        </div>
                        <p className="mt-2 text-sm font-medium text-center text-white">
                            {item.label}
                        </p>
                    </Link>
                ))}
            </div>

            {selectedBackground && (
                <Image
                    width={1280}
                    height={1280}
                    alt="bg-container"
                    src={selectedBackground}
                    className="absolute top-0 left-0 z-10 object-cover object-center w-full h-full"
                />
            )}
        </div>
    );
};

export default Page;
