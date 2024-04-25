"use client";
import { cn } from "@/lib/tw";
import React, { useState } from "react";
import { TypographyP } from "@/components/ui/typography-p";
import { useAppSelector } from "@/store";
import { HomeIcon } from "lucide-react";
import useBreakpoint from "@/hooks/break-point";

export function NavBarMenu() {
  const breakpoint = useBreakpoint();
  const { showNavbarMenu } = useAppSelector((state) => state.app);
  return (
    <div className="relative w-full flex items-center justify-center">
      {breakpoint === "xs" ? <Navbar /> : showNavbarMenu && <Navbar />}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed bottom-0 min-h-[60px] inset-x-0 w-full mx-auto z-50 bg-[#E2E2E2] dark:bg-[#222222] bg-opacity-50 backdrop-filter backdrop-blur-3xl flex justify-center items-center px-3",
      )}
    >
      <nav className="grid w-full grid-flow-col items-center justify-between rounded-16">
        <div className="relative flex h-full flex-col items-center justify-center py-2">
          <HomeIcon />
          <TypographyP title="Home" className="text-xs p-0 m-0" />
        </div>
        <div className="relative flex h-full flex-col items-center justify-center py-2">
          <HomeIcon />
          <TypographyP title="Home" className="text-xs p-0 m-0" />
        </div>
        <div className="relative flex h-full flex-col items-center justify-center py-2">
          <HomeIcon />
          <TypographyP title="Home" className="text-xs p-0 m-0" />
        </div>
        <div className="relative flex h-full flex-col items-center justify-center py-2">
          <HomeIcon />
          <TypographyP title="Home" className="text-xs p-0 m-0" />
        </div>
      </nav>
    </div>
  );
}
