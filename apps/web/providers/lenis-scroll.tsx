"use client";

import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";

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
      "useSmoothScrollContext must be used within a LenisScrollProvider.",
    );
  }
  return context;
};

interface LenisScrollProviderProps {
  children: ReactNode;
  className?: string;
}

const LenisScrollProvider: React.FC<LenisScrollProviderProps> = ({
  children,
  className = "",
}) => {
  const pathName = usePathname();
  const lenis = useLenis();

  const scrollToTop = useCallback(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    }
  }, [lenis]);

  useEffect(() => {
    function raf(time) {
      if (lenis) {
        lenis.raf(time);
      }
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handlePopState = () => scrollToTop();

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);

    return () => {
      if (lenis) {
        lenis.destroy();
      }
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, [pathName, scrollToTop]);

  return (
    <SmoothScrollContext.Provider value={{ scrollToTop }}>
      <ReactLenis
        root
        autoRaf={true}
        options={{
          lerp: 0.1,
          smoothWheel: true,
          duration: 1.5,
          touchMultiplier: 2,
          infinite: false,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
        }}
        className={className}
      >
        <>{children}</>
      </ReactLenis>
    </SmoothScrollContext.Provider>
  );
};

export default LenisScrollProvider;
