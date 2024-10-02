"use client";

import React, { useEffect, useState } from "react";
import { useAppSelector } from "@store/index";

import useSyncPositionsWithURL from "@shared/hooks/use-sync-positions-url";

import FadeWrapper from "@ui/molecules/frame/fade-wrapper";
import BottomBarMenu from "@shared/layouts/main/navigation";
import AudioPlayer from "@shared/layouts/main/head/@components/audio-player";
import ModalProvider from "@shared/lib/providers/modal";
import BorderCollapse from "@shared/layouts/main/icons/border-collapse";
import MenuMobile from "@shared/layouts/main/navigation/menu-mobile";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { positions, hasVisited } = useAppSelector((state) => state.app);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    if (positions) {
      setIsUnmounted(true);
      const timer = setTimeout(() => setIsUnmounted(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [positions]);

  useSyncPositionsWithURL();

  return hasVisited ? (
    <div
      id="main-app"
      className="pointer-events-none w-full relative z-50 h-[100dvh] overflow-y-auto overflow-x-hidden bg-gradient-to-t from-[rgba(45,87,131,0.5)] to-[rgba(45,87,131,0)]"
    >
      <main className="austin-scroll flex flex-col items-center justify-center w-full h-full border-[6.5px] inset-0 border-white pointer-events-auto">
        <AudioPlayer audioSrc="/music.mp3" />
        <FadeWrapper
          className="w-full h-full overflow-hidden"
          isActive={!isUnmounted}
        >
          <div className="w-full h-full overflow-y-auto">{children}</div>
        </FadeWrapper>
        <MenuMobile />
        <BorderCollapse />
      </main>
      <BottomBarMenu />
      <ModalProvider />
    </div>
  ) : null;
};

export default React.memo(MainLayout);
