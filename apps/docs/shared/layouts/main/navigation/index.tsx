"use client";

import React from "react";
import { cn } from "@utils/tw";
import { useAppSelector } from "@store/index";

import useBreakpoint from "@shared/hooks/use-break-point";

import NavigationDesktop from "./desktop";
import NavigationMobile from "./mobile";

export function BottomBarMenu() {
  const { hasFullScreen } = useAppSelector((state) => state.app);
  const breakpoint = useBreakpoint();

  const renderMenu = () => {
    if (breakpoint === "xs") {
      return <NavigationMobile />;
    }

    if (!hasFullScreen) {
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
