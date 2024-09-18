"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { cn } from "@utils/tw";

import { axiosInstance } from "@api/axios";
import { getBlog } from "@server/actions/blog";
import { getTag } from "@server/actions/tag";
import { getProject } from "@server/actions/project";

import {
  setBlogs,
  setHasVisited,
  setProfile,
  setProjects,
  setTags,
} from "@store/app-slice";
import { useAppDispatch, useAppSelector } from "@store/index";

import { BACKGROUNDS } from "@shared/constants";

import { useDisableScroll } from "@shared/hooks/use-disable-scroll";
import useBreakpoint from "@shared/hooks/use-break-point";

import MotionContainer from "@ui/molecules/frame/dynamic-contain";
import LazyWrapper from "@ui/molecules/frame/lazy-wrapper";

import HeadMain from "./head";
import MacUiProvider from "./mac-ui-provider";
import { BottomBarMenu } from "./navigation";

interface Props {
  children: React.ReactNode;
}

const MainContainer = ({ children }: Props) => {
  const { hasSleep, hasFullScreen } = useAppSelector((state) => state.app);

  const [progress, setProgress] = useState(0);
  const [selectedBackground, setSelectedBackground] = useState("");

  const dispatch = useAppDispatch();
  const breakpoint = useBreakpoint();

  const fixLayout = useMemo(() => {
    return `${!hasSleep ? "z-[2000]" : ""} ${!hasFullScreen && "z-[0]"}`;
  }, [hasSleep, hasFullScreen]);

  useEffect(() => {
    const initializeApp = async () => {
      async function getProfile() {
        const response = axiosInstance.get("/api/profile");
        const result = await response;
        return result;
      }

      const apis = [
        { func: getProfile, action: (data: any) => dispatch(setProfile(data)) },
        { func: getBlog, action: (data: any) => dispatch(setBlogs(data)) },
        { func: getTag, action: (data: any) => dispatch(setTags(data)) },
        {
          func: getProject,
          action: (data: any) => dispatch(setProjects(data)),
        },
      ];

      const totalTasks = apis.length;
      let completedTasks = 0;

      try {
        for (const api of apis) {
          const data = await api.func();
          api.action(data);
          completedTasks += 1;
          setProgress((completedTasks / totalTasks) * 100);
        }
      } catch (error) {
        console.error("Error initializing app:", error);
      } finally {
        dispatch(setHasVisited(true));
      }
    };

    initializeApp();
  }, []);

  useEffect(() => {
    if (BACKGROUNDS && BACKGROUNDS.length > 0) {
      const randomIndex = Math.floor(Math.random() * BACKGROUNDS.length);
      const randomBackground = BACKGROUNDS[randomIndex];

      if (randomBackground && randomBackground) {
        setSelectedBackground(randomBackground);
      }
    }
  }, [BACKGROUNDS]);

  useDisableScroll();

  return (
    <LazyWrapper>
      <MotionContainer
        id="container"
        type="blur"
        className={cn(
          "relative mx-auto w-screen h-screen hidden",
          fixLayout,
          progress === 100 && "block",
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
      </MotionContainer>
      <MacUiProvider progress={progress} />
    </LazyWrapper>
  );
};

export default React.memo(MainContainer);
