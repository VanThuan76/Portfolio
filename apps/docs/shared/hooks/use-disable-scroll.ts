import { useState, useEffect } from "react";
import useBreakpoint from "./use-break-point";

export function useDisableScroll() {
  const [isScrollingX, setIsScrollingX] = useState(false);
  const [isScrollingY, setIsScrollingY] = useState(false);
  const breakpoint = useBreakpoint();

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (breakpoint !== "xs" && breakpoint !== "sm") {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          setIsScrollingX(false);
          setIsScrollingY(true);
          document.body.style.overflowY = "true";
          document.body.style.overflowX = "hidden";
        } else {
          setIsScrollingX(false);
          setIsScrollingY(false);
          document.body.style.overflowY = "hidden";
          document.body.style.overflowX = "hidden";
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (breakpoint !== "xs" && breakpoint !== "sm") {
        if (e.changedTouches[0]!.clientX > e.changedTouches[0]!.clientY) {
          setIsScrollingX(false);
          setIsScrollingY(true);
          document.body.style.overflowY = "true";
          document.body.style.overflowX = "hidden";
        } else {
          setIsScrollingX(false);
          setIsScrollingY(false);
          document.body.style.overflowY = "hidden";
          document.body.style.overflowX = "hidden";
        }
      }
    };

    const resetScroll = () => {
      setIsScrollingX(false);
      setIsScrollingY(true);
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("scroll", resetScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("scroll", resetScroll);
    };
  }, [breakpoint]);

  return { isScrollingX, isScrollingY };
}
