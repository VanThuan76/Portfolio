"use client";

import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";
import { ErrorBoundary } from "@shared/layouts/error-boundary";
import { ErrorPage } from "@shared/layouts/error-page";
import { useDidMount } from "@shared/hooks/use-did-mount";
import useInitData from "@shared/hooks/use-init-data";

import BorderCollapse from "@shared/layouts/icons/border-collapse";

const HeadMain = dynamic(() => import("@shared/layouts/head"), { ssr: false });
const FadeWrapper = dynamic(() => import("@ui/molecules/frame/fade-wrapper"), {
  ssr: false,
});
const MenuMobile = dynamic(
  () => import("@shared/layouts/navigation/menu-mobile"),
  { ssr: false },
);
const ModalProvider = dynamic(() => import("@providers/modal"), { ssr: false });
const LazyWrapper = dynamic(() => import("@ui/molecules/frame/lazy-wrapper"), {
  ssr: false,
});
const BottomBarMenu = dynamic(() => import("@shared/layouts/navigation"), {
  ssr: false,
});
const Canvas = dynamic(() => import("@three/index"), { ssr: false });
const Loader = dynamic(() => import("@three/view").then((mod) => mod.Loader), {
  ssr: false,
});
const Scene = dynamic(() => import("./scene"), { ssr: false });

function InitInner({ children }: PropsWithChildren) {
  const { isTasksCompleted } = useInitData();

  return (
    <LazyWrapper>
      <div id="wrap-app" className="relative w-full h-full overflow-auto">
        <div
          id="main-app"
          className="pointer-events-none w-full relative z-50 h-[100dvh] overflow-y-auto overflow-x-hidden bg-none"
        >
          <main className="austin-scroll flex flex-col items-center justify-center w-full h-full border-[6.5px] inset-0 border-white pointer-events-auto overflow-hidden">
            <HeadMain />
            <FadeWrapper
              className="w-full h-full overflow-hidden"
              isActive={isTasksCompleted}
            >
              <div className="w-full h-full overflow-y-auto">{children}</div>
            </FadeWrapper>
            <MenuMobile />
          </main>
          <BorderCollapse />
          <BottomBarMenu />
          <ModalProvider />
          <Scene />
        </div>
        <Loader />
      </div>
    </LazyWrapper>
  );
}

export default function InitContainer(props: PropsWithChildren) {
  const didMount = useDidMount();

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <InitInner {...props} />
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
        }}
      />
    </ErrorBoundary>
  ) : null;
}
