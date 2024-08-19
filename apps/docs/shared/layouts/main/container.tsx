"use client";

import React, { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import { axiosInstance } from "@api/axios";
import { getBlog } from "@server/actions/blog";
import { getTag } from "@server/actions/tag";
import { getProject } from "@server/actions/project";

import { cn } from "@utils/tw";
import { setBlogs, setProfile, setProjects, setTags } from "@store/app-slice";
import { useAppDispatch, useAppSelector } from "@store/index";

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

  const dispatch = useAppDispatch();
  const pathName = usePathname();

  const styleLayout = useMemo(() => {
    return hasFullScreen
      ? "bg-[#F6F6F6] dark:bg-[#060606]"
      : "bg-[#E2E2E2] dark:bg-[#222222] px-4 md:px-8";
  }, [hasFullScreen]);

  const styleScreen = useMemo(() => {
    return hasFullScreen
      ? "relative w-full h-full"
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
      }
    };

    initializeApp();
  }, []);

  return (
    <main>
      <LazyWrapper>
        <MotionContainer
          type="blur"
          className={cn(
            "relative mx-auto w-[100vw] min-h-[100vh] hidden",
            styleLayout,
            fixLayout,
            progress === 100 && "block",
          )}
        >
          <HeadMain className={cn(!hasFullScreen && "rounded-t-xl")} />
          <div className={cn("fade-in", styleScreen, fixLayoutFullScreen)}>
            {children}
          </div>
        </MotionContainer>
        <BottomBarMenu />
        <MacUiProvider progress={progress} />
      </LazyWrapper>
    </main>
  );
};

export default React.memo(MainContainer);
