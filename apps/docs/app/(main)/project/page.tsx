"use client";

import React from "react";
import { cn } from "@utils/tw";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@store/index";

import useBreakpoint from "@shared/hooks/use-break-point";

import FadeWrapper from "@ui/molecules/frame/fade-wrapper";

import CardProjectDesktop from "./@components/card-project-desktop";
import CardProjectMobile from "./@components/card-project-mobile";

export default function Page() {
  const { projects } = useAppSelector((state) => state.app);

  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const breakpoint = useBreakpoint();

  return (
    <FadeWrapper
      className={cn("w-full h-full", breakpoint === "xs" && "bg-screen-mobile")}
    >
      <CardProjectDesktop projects={projects} />
      <CardProjectMobile projects={projects} isPending={isPending} />
    </FadeWrapper>
  );
}
