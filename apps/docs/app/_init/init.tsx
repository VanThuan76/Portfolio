"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";
import { toast } from "@shared/hooks/use-toast";

import { useAppDispatch, useAppSelector } from "@store/index";
import { useDidMount } from "@shared/hooks/use-did-mount";

import { setHasVisited, setInitProgress } from "@store/app-slice";

import { useGetBlog, useGetBlogCategory } from "@server/_actions/blog_actions";
import { useGetProject } from "@server/_actions/project_actions";
import { useGetTag } from "@server/_actions/tag_actions";
import { useGetInformationWork } from "@server/_actions/information_work_actions";

import { ErrorBoundary } from "@shared/layouts/main/error-boundary";
import { ErrorPage } from "@shared/layouts/main/error-page";

import useFullScreenBackground from "@shared/hooks/use-mobile-full-screen";
import LazyWrapper from "@ui/molecules/frame/lazy-wrapper";
import MacUiProvider from "@shared/layouts/main/mac-ui-provider";
import useBreakpoint from "@shared/hooks/use-break-point";

const SceneMain = dynamic(() => import("@three/index"), { ssr: false });

function InitInner({ children }: PropsWithChildren) {
  const router = useRouter();
  const breakpoint = useBreakpoint();
  const dispatch = useAppDispatch();
  const positions = useAppSelector((state) => state.app.positions);

  const [progress, setProgress] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isTasksCompleted, setIsTasksCompleted] = useState(false);

  const actions = [
    useGetTag(),
    useGetBlog(),
    useGetBlogCategory(),
    useGetProject(),
    useGetInformationWork(),
  ];

  const fetchData = async () => {
    let completedTasks = 0;
    try {
      const tasks = actions.map((action) => action.mutateAsync({}));
      const results = await Promise.allSettled(tasks);
      const totalTasks = results.length;

      results.forEach((result) => {
        if (result.status === "fulfilled") {
          completedTasks += 1;
        } else {
          toast({
            variant: "destructive",
            title: `Task failed: ${result.reason.message}`,
          });
        }
      });

      const progressValue = (completedTasks / totalTasks) * 100;
      setProgress(progressValue);
      dispatch(setInitProgress(progressValue));

      setIsTasksCompleted(true);
    } catch (error) {
      toast({
        variant: "destructive",
        title: `Failed to get information from web`,
      });
    }
  };

  useEffect(() => {
    if (loadingProgress === 100 && isTasksCompleted) {
      dispatch(setHasVisited(true));
      router.push("/");
    }
  }, [loadingProgress, isTasksCompleted]);

  useEffect(() => {
    const initializeApp = async () => {
      await fetchData();
    };

    initializeApp();
  }, [dispatch]);

  const handleProgress = (progress: number) => {
    setLoadingProgress(progress);
  };

  useFullScreenBackground({ backgroundColor: "#FFD09B" });

  return (
    <LazyWrapper>
      {children}
      <div
        id="background-app"
        className="fixed inset-0 z-30 flex flex-col items-center justify-center overflow-hidden pointer-events-none"
      >
        <div className="relative w-full h-full overflow-hidden pointer-events-none">
          <SceneMain
            breakpoint={breakpoint}
            positions={positions}
            onProgress={handleProgress}
          />
        </div>
      </div>
      <MacUiProvider progress={progress} />
    </LazyWrapper>
  );
}

export default function InitContainer(props: PropsWithChildren) {
  const didMount = useDidMount();

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <InitInner {...props} />
    </ErrorBoundary>
  ) : (
    <></>
  );
}
