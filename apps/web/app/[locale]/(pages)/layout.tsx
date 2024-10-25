"use client";

import dynamic from "next/dynamic";
import * as FadeIn from "@ui/molecules/frame/fade-wrapper";

import useInitData from "@shared/hooks/use-init-data";
import useBreakpoint from "@shared/hooks/use-break-point";
import BorderCollapse from "@shared/layouts/icons/border-collapse";

// Components dynamic
const HeadMain = dynamic(() => import("@shared/layouts/head"), { ssr: false });
const ModalProvider = dynamic(() => import("@providers/modal"), { ssr: false });
const Menu = dynamic(() => import("@shared/layouts/navigation/menu"), {
  ssr: false,
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const breakpoint = useBreakpoint();
  useInitData();

  return (
    <div
      id="frame"
      className="pointer-events-none w-full relative z-50 h-[100dvh] overflow-y-auto overflow-x-hidden"
    >
      <main
        id="main"
        className="relative flex flex-col items-center justify-center w-full h-full border-t-[0.5px] border-b-[0.5px] border-r-[0.5px] inset-0 border-white pointer-events-auto overflow-hidden"
      >
        <HeadMain />
        <FadeIn.Container className="w-full h-full overflow-hidden">
          <FadeIn.Item className="w-full h-full overflow-y-auto">
            {children}
          </FadeIn.Item>
          <ModalProvider />
        </FadeIn.Container>
      </main>
      <Menu isSmallScreen={new Set(["xs", "sm"]).has(breakpoint)} />
      <BorderCollapse />
    </div>
  );
}
