"use client";
import React from "react";
import { useAppSelector } from "@/store";
import { NavbarMenuDesktop } from "./navbar-menu-desktop";
import { NavbarMenuMobile } from "./navbar-menu-mobile";
import useBreakpoint from "@/hooks/break-point";

export function NavBarMenu() {
  const breakpoint = useBreakpoint();
  const { showNavbarMenu } = useAppSelector((state) => state.app);
  return (
    <div className="relative w-full flex items-center justify-center">
      {breakpoint === "xs" ? (
        <NavbarMenuMobile />
      ) : (
        showNavbarMenu && <NavbarMenuDesktop />
      )}
    </div>
  );
}
