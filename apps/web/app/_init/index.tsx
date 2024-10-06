"use client";

import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";
import { ErrorBoundary } from "@shared/layouts/main/error-boundary";
import { ErrorPage } from "@shared/layouts/main/error-page";
import { useDidMount } from "@shared/hooks/use-did-mount";
import useInitData from "@shared/hooks/use-init-data";

import BorderCollapse from "@shared/layouts/main/icons/border-collapse";
import FadeWrapper from "@ui/molecules/frame/fade-wrapper";
import LazyWrapper from "@ui/molecules/frame/lazy-wrapper";
import HeadMain from "@shared/layouts/main/head";
import MenuMobile from "@shared/layouts/main/navigation/menu-mobile";
import BottomBarMenu from "@shared/layouts/main/navigation";

import Scene from "./scene";

const ModalProvider = dynamic(() => import("@providers/modal"), { ssr: false });
const SceneMain = dynamic(() => import("@three/index"), { ssr: false });

function InitInner({ children }: PropsWithChildren) {
  const { isTasksCompleted } = useInitData();

  return (
    <LazyWrapper>
      <div
        id="main-app"
        className="pointer-events-none w-full relative z-50 h-[100dvh] overflow-y-auto overflow-x-hidden bg-none"
      >
        <main className="austin-scroll flex flex-col items-center justify-center w-full h-full border-[6.5px] inset-0 border-white pointer-events-auto">
          <HeadMain />
          <FadeWrapper
            className="w-full h-full overflow-hidden"
            isActive={!isTasksCompleted}
          >
            <div className="w-full h-full overflow-y-auto">{children}</div>
          </FadeWrapper>
          <MenuMobile />
          <BorderCollapse />
        </main>
        <BottomBarMenu />
        <ModalProvider />
        <Scene />
      </div>
    </LazyWrapper>
  );
}

export default function InitContainer(props: PropsWithChildren) {
  const didMount = useDidMount();

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <InitInner {...props} />
      <SceneMain
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 30,
        }}
      />
    </ErrorBoundary>
  ) : null;
}
