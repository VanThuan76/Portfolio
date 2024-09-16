"use client";

import React, { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import { axiosInstance } from "@api/axios";
import { getBlog } from "@server/actions/blog";
import { getTag } from "@server/actions/tag";
import { getProject } from "@server/actions/project";

import { cn } from "@utils/tw";
import { useDisableScroll } from "@shared/hooks/use-disable-scroll";
import {
  setBlogs,
  setHasVisited,
  setProfile,
  setProjects,
  setTags,
} from "@store/app-slice";
import { useAppDispatch, useAppSelector } from "@store/index";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
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
  const { hasSleep, hasFullScreen, isHintSwipe } = useAppSelector(
    (state) => state.app,
  );

  const [progress, setProgress] = useState(0);

  const dispatch = useAppDispatch();
  const pathName = usePathname();
  const breakpoint = useBreakpoint();

  const styleLayout = useMemo(() => {
    return hasFullScreen
      ? "bg-[#F6F6F6] dark:bg-[#060606]"
      : "bg-[#E2E2E2] dark:bg-[#222222] px-4 md:px-8";
  }, [hasFullScreen]);

  const styleScreen = useMemo(() => {
    return hasFullScreen
      ? "relative w-screen h-screen"
      : "relative w-full h-full bg-[#F6F6F6] dark:bg-[#060606] rounded-b-xl p-2 md:p-5 lg:p-10";
  }, [hasFullScreen]);

  const fixLayoutFullScreen = useMemo(() => {
    return hasFullScreen &&
      !pathName.includes("/admin") &&
      !pathName.includes("/extensions")
      ? "md:px-12 md:py-4"
      : "";
  }, [hasFullScreen, pathName]);

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

  useDisableScroll();

  return (
    <LazyWrapper>
      <MotionContainer
        id="container"
        type="blur"
        className={cn(
          "relative mx-auto w-screen min-h-screen hidden",
          styleLayout,
          fixLayout,
          progress === 100 && "block",
          breakpoint === "xs" && "bg-screen-mobile",
        )}
      >
        <HeadMain className={cn(!hasFullScreen && "rounded-t-xl")} />

        <div className={cn(styleScreen, fixLayoutFullScreen)}>
          {children}
        </div>

        {isHintSwipe && (
          <LoaderImage
            src="/swipe.png"
            isLoader={false}
            alt="swipe"
            width={300}
            height={300}
            className="absolute block md:hidden object-cover object-center w-[75px] h-[75px] rounded-lg bottom-[50%] right-5 z-[5000] swipe-animation"
          />
        )}
      </MotionContainer>

      {/* //Extend */}
      <BottomBarMenu />
      <MacUiProvider progress={progress} />
    </LazyWrapper>
  );
};

export default React.memo(MainContainer);
