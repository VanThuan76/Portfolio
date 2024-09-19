"use client";

import React from "react";
import { cn } from "@utils/tw";
import { useAppSelector } from "@store/index";

import useBreakpoint from "@shared/hooks/use-break-point";

import CardProjectDesktop from "./@components/card-project-desktop";
import CardProjectMobile from "./@components/card-project-mobile";

export default function Page() {
  const { projects } = useAppSelector((state) => state.app);

  const breakpoint = useBreakpoint();

  return (
    <div
      className={cn("w-full h-full", breakpoint === "xs" && "bg-screen-mobile")}
    >
      <CardProjectDesktop projects={projects} />
      <CardProjectMobile projects={projects} />
    </div>
  );
}
