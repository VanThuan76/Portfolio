import { useEffect, useState } from "react";

const breakpoints = {
  0: "xs",
  600: "sm",
  960: "md",
  1280: "lg",
  1920: "xl",
};

/**
 * Hook to detect window size breakpoints.
 * @return The current breakpoint (xs, sm, md, lg, xl).
 */
export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<string>("xs");
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    if (windowSize.width !== undefined) {
      if (windowSize.width < 600) {
        setBreakpoint(breakpoints[0]);
      } else if (windowSize.width < 960) {
        setBreakpoint(breakpoints[600]);
      } else if (windowSize.width < 1280) {
        setBreakpoint(breakpoints[960]);
      } else if (windowSize.width < 1920) {
        setBreakpoint(breakpoints[1280]);
      } else {
        setBreakpoint(breakpoints[1920]);
      }
    }
  }, [windowSize.width]);
  return breakpoint;
};
