"use client";

import dynamic from "next/dynamic";
import React, { Suspense, PropsWithChildren, useRef, Children } from "react";
import { AnimatePresence } from "framer-motion";
import { ErrorBoundary } from "@shared/layouts/error-boundary";
import { ErrorPage } from "@shared/layouts/error-page";
import { useDidMount } from "@shared/hooks/use-did-mount";
import useBreakpoint from "@shared/hooks/use-break-point";

const LazyWrapper = dynamic(() => import("@ui/molecules/frame/lazy-wrapper"), {
  ssr: false,
});
const LoaderR3f = dynamic(
  () => import("@three/view.tsx").then((mod) => mod.LoaderR3f),
  { ssr: false },
);
const CanvasComponent = dynamic(
  () => import("@three/index.tsx").then((mod) => mod.App),
  { ssr: false },
);

export default function InitContainer({ children }: PropsWithChildren) {
  const ref = useRef(null);
  const didMount = useDidMount();
  const breakpoint = useBreakpoint();

  return (
    didMount && (
      <ErrorBoundary fallback={ErrorPage}>
        <LazyWrapper>
          <div
            id="wrap"
            ref={ref}
            className="relative w-full h-full overflow-auto"
          >
            <AnimatePresence mode="wait">
              {Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                  return React.cloneElement(child, { key: breakpoint });
                }
                return child;
              })}
            </AnimatePresence>
            <Suspense fallback={null}>
              <CanvasComponent eventSource={ref} breakpoint={breakpoint} />
            </Suspense>
            <LoaderR3f />
          </div>
        </LazyWrapper>
      </ErrorBoundary>
    )
  );
}
