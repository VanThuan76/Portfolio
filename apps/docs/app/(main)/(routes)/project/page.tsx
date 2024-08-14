"use client";

import React from "react";
import { useAppSelector } from "@store/index";

import MotionContainer from "@ui/molecules/frame/dynamic-contain";

import CardProjectDesktop from "./@components/card-project-desktop";
import CardProjectMobile from "./@components/card-project-mobile";

export default function Page() {
  const { projects, isOpenScreen } = useAppSelector((state) => state.app);

  return (
    <MotionContainer
      type={isOpenScreen ? "slide" : "blur"}
      direction="right"
      className="w-full h-full col-span-2"
    >
      <CardProjectMobile projects={projects} />
      <CardProjectDesktop projects={projects} />
    </MotionContainer>
  );
}
