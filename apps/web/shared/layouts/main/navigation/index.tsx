"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@utils/tw";

import { useAppSelector } from "@store/index";
import useBreakpoint from "@shared/hooks/use-break-point";

import NavigationDesktop from "./desktop";
import NavigationMobile from "./mobile";

const BottomBarMenu = () => {
  const breakpoint = useBreakpoint();
  const positions = useAppSelector((state) => state.app.positions);

  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    if (positions) {
      setIsUnmounted(true);

      const timer = setTimeout(() => {
        setIsUnmounted(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [positions]);

  const renderMenu = () => {
    if (breakpoint === "xs") {
      return <NavigationMobile />;
    }

    if (breakpoint !== "xs") {
      return <NavigationDesktop />;
    }

    return null;
  };

  if (isUnmounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed w-full flex items-center justify-center pointer-events-auto px-2",
      )}
    >
      {renderMenu()}
    </div>
  );
};
export default React.memo(BottomBarMenu);
