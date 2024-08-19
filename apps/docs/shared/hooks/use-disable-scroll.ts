'use client'
import React, { useState, useEffect } from "react";

export function useDisableScroll() {
    const [isScrollingX, setIsScrollingX] = useState(false);
    const [isScrollingY, setIsScrollingY] = useState(false);

    useEffect(() => {
        const handleScroll = (e: WheelEvent) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                // Cuộn ngang nhiều hơn cuộn dọc
                setIsScrollingX(true);
                setIsScrollingY(false);
                document.body.style.overflowY = "hidden";
            } else {
                // Cuộn dọc nhiều hơn cuộn ngang
                setIsScrollingX(false);
                setIsScrollingY(true);
                document.body.style.overflowX = "hidden";
            }
        };

        const resetScroll = () => {
            document.body.style.overflowY = "auto";
            document.body.style.overflowX = "auto";
            setIsScrollingX(false);
            setIsScrollingY(false);
        };

        window.addEventListener("wheel", handleScroll);
        window.addEventListener("scroll", resetScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("scroll", resetScroll);
        };
    }, []);

    return { isScrollingX, isScrollingY };
}
