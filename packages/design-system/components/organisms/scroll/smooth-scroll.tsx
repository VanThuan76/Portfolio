"use client";

import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

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
  className: string;
}> = ({ children, className }) => {
  const lenisRef = useRef<any>(null);
  const pathName = usePathname();

  const scrollToTop = useCallback(() => {
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(0, { immediate: true, force: true });
    }
  }, []);

  useEffect(() => {
    scrollToTop();
    const handlePopState = () => scrollToTop();

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, [pathName, lenisRef]);

  return (
    <SmoothScrollContext.Provider value={{ scrollToTop }}>
      <ReactLenis
        root
        ref={lenisRef}
        autoRaf={false}
        options={{
          lerp: 0.1,
          smoothWheel: true,
          duration: 1,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
        }}
        className={className}
      >
        <>{children}</>
      </ReactLenis>
    </SmoothScrollContext.Provider>
  );
};

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  useLenis(({ scroll, limit }) => {
    const progress = limit > 0 ? (scroll / limit) * 100 : 0;
    setScrollProgress(progress);
  });

  return { scrollProgress };
};
