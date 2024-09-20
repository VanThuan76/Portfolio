"use client";

import React from "react";
import { cn } from "@utils/tw";

import useBreakpoint from "@shared/hooks/use-break-point";

import NavigationDesktop from "./desktop";
import NavigationMobile from "./mobile";

const BottomBarMenu = () => {
    const breakpoint = useBreakpoint();

    const renderMenu = () => {
        if (breakpoint === "xs") {
            return <NavigationMobile />;
        }

        if (breakpoint !== "xs") {
            return <NavigationDesktop />;
        }

        return null;
    };

    return (
        <div
            className={cn(
                "relative w-full flex items-center justify-cente z-[10002]",
            )}
        >
            {renderMenu()}
        </div>
    );
}
export default React.memo(BottomBarMenu);
