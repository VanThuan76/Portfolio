"use client";

import * as FadeIn from "@repo/design-system/components/molecules/frame/fade-wrapper";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { usePathname } from "next/navigation";

import { useBreakpoint } from "@repo/hooks";

import { SmoothScroll } from "@repo/design-system/components/organisms/scroll/smooth-scroll";
import BorderCollapse from "@shared/layouts/icons/border-collapse";
import NavBottom from "@shared/layouts/navigation/nav-bottom";

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
  const pathName = usePathname();

  return (
    <SmoothScroll
      pathname={pathName}
      className="relative z-50 w-full h-auto pointer-events-none"
    >
      <Suspense fallback={null}>
        <div className="relative flex flex-col items-center justify-center w-full h-full border-t-[0.5px] border-b-[0.5px] border-r-[0.5px] inset-0 border-white pointer-events-auto">
          <HeadMain />
          <FadeIn.Container className="w-full h-full">
            <FadeIn.Item className="w-full h-full min-h-full overflow-x-hidden overflow-y-auto">
              {children}
            </FadeIn.Item>
            <ModalProvider />
          </FadeIn.Container>
        </div>
        <div className="fixed top-0 right-0">
          <Menu isSmallScreen={new Set(["xs", "sm"]).has(breakpoint)} />
          <BorderCollapse />
        </div>
      </Suspense>
    </SmoothScroll>
  );
}
