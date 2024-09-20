"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@utils/tw";

import SettingDropdown from "./@components/setting-dropdown";
import { DATA_MOBILE_MENUS } from "@shared/constants";

const NavigationExtApple = dynamic(
    () => import("./@components/navigation-ext-apple"),
    { ssr: false },
);

type Props = {
    className?: string;
};

const HeadMain = ({ className }: Props) => {
    const pathName = usePathname();
    const [osName, setOsName] = useState(null);

    useEffect(() => {
        const handleAcceptCookie = () => {
            const ua = navigator.userAgent;
            const osRegex = /(Mac OS X|Windows|Linux)/;
            const match = ua.match(osRegex);
            if (match) {
                // @ts-ignore
                setOsName(match[0]);
            }
        };
        const isCookieAccepted = true;
        if (isCookieAccepted) {
            handleAcceptCookie();
        }
    }, []);

    return (
        <div
            className={cn(
                "hidden sticky bg-neutral-200 dark:bg-[#1C1C1E] shadow-sm w-full top-0 left-0 md:grid grid-cols-3 justify-center items-center px-4 z-50",
                className,
            )}
        >
            <div className="flex items-center justify-start">
                <SettingDropdown />
                <p className="text-black text-[12px]">
                    {DATA_MOBILE_MENUS.find((menu) => menu.href === pathName)?.label}
                </p>
            </div>
            <div className="text-sm text-center">🖐🏻{osName}</div>
            <NavigationExtApple />
        </div>
    );
};

export default HeadMain;
