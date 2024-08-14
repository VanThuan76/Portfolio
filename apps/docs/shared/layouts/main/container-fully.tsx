"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { getBlog } from "@server/actions/blog";
import { getTag } from "@server/actions/tag";
import { getProject } from "@server/actions/project";

import { cn } from "@utils/tw";
import {
  setBlogs,
  setHasSleep,
  setProfile,
  setProjects,
  setTags,
} from "@store/app-slice";
import { useAppDispatch, useAppSelector } from "@store/index";

import MacStartupScreen from "@ui/organisms/mac-startup";
import MacSleepScreen from "@ui/organisms/mac-sleep";
import MacLaunchPadScreen from "@ui/organisms/mac-launchpad";

import MotionContainer from "@ui/molecules/frame/dynamic-contain";
import LazyWrapper from "@ui/molecules/frame/lazy-wrapper";

import HeadMain from "./head/head-main";
import { BottomBarMenu } from "./bottom-bar";
import { axiosInstance } from "@api/axios";

interface Props {
  children: React.ReactNode;
}

const ContainerFully = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const { hasSleep, hasFullScreen } = useAppSelector((state) => state.app);

  const [progress, setProgress] = useState(0);
  const [swiped, setSwiped] = useState(false);

  const pathName = usePathname();

  const styleLayout = hasFullScreen
    ? "bg-[#F6F6F6] dark:bg-[#060606]"
    : "bg-[#E2E2E2] dark:bg-[#222222] px-4 md:px-8";

  const fixLayoutFullScreen =
    hasFullScreen &&
    !pathName.includes("/admin") &&
    !pathName.includes("/extensions")
      ? "md:px-12 md:py-4 pt-4 "
      : "";

  const fixLayout = `${!hasSleep ? "z-[2000]" : ""} ${!hasFullScreen && "z-[0]"}`;

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
    <LazyWrapper>
      <MacStartupScreen
        logo="/logo.png"
        progress={progress}
        isActive={progress === 100 ? false : true}
      />
      <MacSleepScreen
        logo="/logo.png"
        isActive={hasSleep}
        handleSuccess={() => {
          dispatch(setHasSleep(false));
          setSwiped(false);
        }}
        setSwiped={setSwiped}
        swiped={swiped}
      />
      <MacLaunchPadScreen
        isActive={!hasFullScreen}
        applications={[{ name: "Test", image: "/logo.png" }]}
      />
      {progress === 100 && (
        <MotionContainer
          type="blur"
          className={cn(
            "relative mx-auto w-[100vw] min-h-[100vh]",
            styleLayout,
            fixLayout,
          )}
        >
          <HeadMain className={cn(!hasFullScreen && "rounded-t-xl")} />
          <div className={fixLayoutFullScreen}>{children}</div>
        </MotionContainer>
      )}
      <BottomBarMenu />
    </LazyWrapper>
  );
};

export default ContainerFully;
