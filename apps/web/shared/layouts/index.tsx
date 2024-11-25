"use client";

import React, { PropsWithChildren, Children } from "react";
import { AnimatePresence } from "framer-motion";
import { ErrorBoundary } from "@shared/layouts/error-boundary";
import { ErrorPage } from "@shared/layouts/error-page";

import { useInitData, useDidMount, useBreakpoint } from "@repo/hooks";

import LazyWrapper from "@repo/design-system/components/molecules/frame/lazy-wrapper";

export default function InitContainer({ children }: PropsWithChildren) {
  const didMount = useDidMount();
  const breakpoint = useBreakpoint();

  const { isLoading, isTasksCompleted } = useInitData();

  if (!didMount || isLoading || !isTasksCompleted) return <></>;

  return (
    <ErrorBoundary fallback={ErrorPage}>
      <AnimatePresence mode="wait">
        {Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return (
              <LazyWrapper key={breakpoint}>
                {React.cloneElement(child as any)}
              </LazyWrapper>
            );
          }
          return null;
        })}
      </AnimatePresence>
    </ErrorBoundary>
  );
}
