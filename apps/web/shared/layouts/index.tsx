"use client";

import dynamic from "next/dynamic";
import { PropsWithChildren, useRef } from "react";
import { ErrorBoundary } from "@shared/layouts/error-boundary";
import { ErrorPage } from "@shared/layouts/error-page";
import { useDidMount } from "@shared/hooks/use-did-mount";
import { LoaderR3f } from "@three/view";
import * as FadeIn from "@ui/molecules/frame/fade-wrapper";

import BorderCollapse from "@shared/layouts/icons/border-collapse";
import useInitData from "@shared/hooks/use-init-data";
import useBreakpoint from "@shared/hooks/use-break-point";
// Components dynamic
const HeadMain = dynamic(() => import("@shared/layouts/head"), { ssr: false });

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
const CanvasComponent = dynamic(
  () => import("@three/index.tsx").then((mod) => mod.App),
  { ssr: false },
);

function InitInner({ children }: PropsWithChildren) {
  const ref = useRef(null);
  const breakpoint = useBreakpoint();
  const { isTasksCompleted } = useInitData();

  return (
    <LazyWrapper>
      <div
        ref={ref}
        id="wrap-app"
        className="relative w-full h-full overflow-auto"
      >
        <div
          id="main-app"
          className="pointer-events-none w-full relative z-50 h-[100dvh] overflow-y-auto overflow-x-hidden"
        >
          <main className="relative flex flex-col items-center justify-center w-full h-full border-[0.5px] inset-0 border-white pointer-events-auto overflow-hidden">
            <HeadMain />
            <FadeIn.Container
              className="w-full h-full overflow-hidden"
              isActive={isTasksCompleted}
            >
              <FadeIn.Item className="w-full h-full overflow-y-auto">
                {children}
              </FadeIn.Item>
              <ModalProvider />
            </FadeIn.Container>
          </main>
          <MenuMobile />
          <BorderCollapse />
          <BottomBarMenu />
        </div>
        <CanvasComponent eventSource={ref} breakpoint={breakpoint} />
      </div>
    </LazyWrapper>
  );
}

export default function InitContainer(props: PropsWithChildren) {
  const didMount = useDidMount();

  return (
    didMount && (
      <ErrorBoundary fallback={ErrorPage}>
        <InitInner {...props} />
        <LoaderR3f />
      </ErrorBoundary>
    )
  );
}
