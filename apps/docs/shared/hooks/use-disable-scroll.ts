"use client";
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
                    setIsScrollingX(true);
                    setIsScrollingY(false);
                    document.body.style.overflowY = "hidden";
                } else {
                    setIsScrollingX(false);
                    setIsScrollingY(true);
                    document.body.style.overflowX = "hidden";
                }
            } else {
                document.body.style.overflowY = "auto";
                document.body.style.overflowX = "auto";
            }
        };

        const resetScroll = () => {
            if (breakpoint !== "xs" && breakpoint !== "sm") {
                document.body.style.overflowY = "hidden";
                document.body.style.overflowX = "hidden";
            } else {
                document.body.style.overflowY = "auto";
                document.body.style.overflowX = "auto";
            }
            setIsScrollingX(false);
            setIsScrollingY(false);
        };

        window.addEventListener("wheel", handleScroll);
        window.addEventListener("scroll", resetScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("scroll", resetScroll);
        };
    }, [breakpoint]);

    return { isScrollingX, isScrollingY };
}
