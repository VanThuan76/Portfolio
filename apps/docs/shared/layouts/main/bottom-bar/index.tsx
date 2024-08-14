"use client";

import React from "react";
import { useAppSelector } from "@store/index";
import useBreakpoint from "@shared/hooks/use-break-point";

import { BottomBarMenuDesktop } from "./desktop";
import { BottomBarMenuMobile } from "./mobile";
export function BottomBarMenu() {
  const breakpoint = useBreakpoint();
  const { hasFullScreen } = useAppSelector((state) => state.app);

  return (
    <div className="relative w-full flex items-center justify-center z-[10002]">
      {breakpoint === "xs" ? (
        <BottomBarMenuMobile />
      ) : (
        !hasFullScreen && <BottomBarMenuDesktop />
      )}
    </div>
  );
}
