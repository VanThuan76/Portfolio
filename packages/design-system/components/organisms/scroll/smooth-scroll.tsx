"use client";

import React, { createContext, useContext, useRef, useEffect } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

interface SmoothScrollContextType {
  scrollToTop: () => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | undefined>(
  undefined,
);

export const useSmoothScrollContext = (): SmoothScrollContextType => {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error(
      "useSmoothScrollContext must be used within a SmoothScroll",
    );
  }
  return context;
};

export const SmoothScroll: React.FC<{
  children: React.ReactNode;
  pathname: string;
  className: string;
}> = ({ children, pathname, className }) => {
  const lenisRef = useRef<any>(null);

  const scrollToTop = () => {
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(0, { immediate: true, force: true });
    }
  };

  useEffect(() => {
    scrollToTop();
    const handlePopState = () => scrollToTop();

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, [pathname, lenisRef]);

  return (
    <SmoothScrollContext.Provider value={{ scrollToTop }}>
      <ReactLenis
        root
        ref={lenisRef}
        autoRaf={false}
        options={{ lerp: 0.1 }}
        className={className}
      >
        <>{children}</>
      </ReactLenis>
    </SmoothScrollContext.Provider>
  );
};
