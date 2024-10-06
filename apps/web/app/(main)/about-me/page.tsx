"use client";

import React from "react";

import { MultiStepLoader } from "@ui/molecules/effects/multi-step-loader";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";

const loadingStates = [
  {
    text: "🫀Stop for a moment...",
  },
  {
    text: "About me...",
  },
  {
    text: "My name is Vu Van Thuan, but you can call me Austin.",
  },
  {
    text: "I’m embarking on a journey to become a full-stack developer.",
  },
  {
    text: "My passion lies in taking on new challenges and continuously expanding my skill set.",
  },
  {
    text: "I love contributing to innovative projects and working with a team to create something amazing.",
  },
  {
    text: "I’m excited about the future and looking forward to the opportunities ahead",
  },
  {
    text: "Welcome to my website, enjoy!",
  },
  {
    text: "© Copyright 2024 - Present Thuan",
  },
];

export default function HomePage() {
  return (
    <div className="relative grid w-full h-full m-auto overflow-hidden place-items-center bg-black/50 backdrop-blur-sm">
      <MultiStepLoader
        loadingStates={loadingStates}
        loading={true}
        duration={2000}
      />

      <div className="absolute z-50 w-[300px] md:w-[500px] h-full md:bottom-0 left-3">
        <LoaderImage
          isLoader={false}
          width={1280}
          height={900}
          alt="@character"
          src="/images/about-me/character.png"
          className="object-contain object-center w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 left-0 z-40 w-[400px] md:w-[600px]">
        <LoaderImage
          isLoader={false}
          width={1980}
          height={1280}
          alt="@background"
          src="/images/about-me/left-bg.png"
          className="object-contain object-center w-full h-full"
        />
      </div>
      <div className="absolute top-0 right-0 z-40 w-[400px] md:w-[600px]">
        <LoaderImage
          isLoader={false}
          width={1980}
          height={1280}
          alt="@background"
          src="/images/about-me/right-bg.png"
          className="object-contain object-center w-full h-full"
        />
      </div>
    </div>
  );
}
