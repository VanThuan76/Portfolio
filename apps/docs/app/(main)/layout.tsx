"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { cn } from "@utils/tw";

import { useAppSelector } from "@store/index";

import { BACKGROUNDS } from "@shared/constants";

import { useDisableScroll } from "@shared/hooks/use-disable-scroll";
import useBreakpoint from "@shared/hooks/use-break-point";

import HeadMain from "@shared/layouts/main/head";
import { BottomBarMenu } from "@shared/layouts/main/navigation";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { initProgress, hasSleep, hasFullScreen } = useAppSelector(
    (state) => state.app,
  );
  const [selectedBackground, setSelectedBackground] = useState("");

  const breakpoint = useBreakpoint();

  const fixLayout = useMemo(() => {
    return `${!hasSleep ? "z-[2000]" : ""} ${!hasFullScreen && "z-[0]"}`;
  }, [hasSleep, hasFullScreen]);

  useEffect(() => {
    if (BACKGROUNDS && BACKGROUNDS.length > 0) {
      const randomIndex = Math.floor(Math.random() * BACKGROUNDS.length);
      const randomBackground = BACKGROUNDS[randomIndex];

      if (randomBackground) {
        setSelectedBackground(randomBackground);
      }
    }
  }, [BACKGROUNDS]);

  useDisableScroll();

  return (
    <main
      id="container"
      className={cn(
        "relative mx-auto w-screen h-screen hidden z-[2000]",
        initProgress === 100 && "block",
        breakpoint === "xs" && "bg-screen-mobile",
      )}
    >
      <HeadMain className={cn(!hasFullScreen && "rounded-t-xl")} />
      <div className="relative flex flex-col items-center justify-center w-full h-full md:h-[90vh] z-50 md:mt-4 md:px-12">
        {children}
      </div>
      {selectedBackground && (
        <Image
          width={1280}
          height={1280}
          alt="bg-container"
          src={selectedBackground}
          className="absolute top-0 left-0 z-10 hidden object-cover object-center w-full h-full md:block"
          priority={true}
        />
      )}
      <BottomBarMenu />
    </main>
  );
};

export default React.memo(MainLayout);
