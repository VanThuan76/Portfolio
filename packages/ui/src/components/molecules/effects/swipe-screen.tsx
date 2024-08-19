"use client";
import React, { useState, useEffect } from "react";
import { m, useAnimation } from "framer-motion";

function SwipeableScreen({
    children,
    handleNextPage,
    handlePrevPage,
    isActive,
}: {
    children: React.ReactNode;
    handleNextPage: () => void;
    handlePrevPage: () => void;
    isActive: boolean;
}) {
    const controls = useAnimation();
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);
    const [dragAmount, setDragAmount] = useState<number>(0);
    const [isScrollingY, setIsScrollingY] = useState<boolean>(false);
    const [resetTimeout, setResetTimeout] = useState<number | null>(null);

    const minSwipeDistance = 50; // Ngưỡng di chuyển tối thiểu
    const swipeThreshold = 0.6; // Ngưỡng phần trăm chiều rộng màn hình cần vuốt

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            if (isActive && e.targetTouches && e.targetTouches.length > 0) {
                setTouchStartX(e.targetTouches[0]!.clientX);
                setTouchEndX(null);
                setIsScrollingY(false);
                setDragAmount(0);

                document.body.style.overflowY = 'hidden';
                const container = document.getElementById('container');
                if (container) {
                    container.style.overflow = 'hidden';
                }

                if (resetTimeout !== null) {
                    clearTimeout(resetTimeout);
                    setResetTimeout(null);
                }
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (
                isActive &&
                e.targetTouches &&
                e.targetTouches.length > 0 &&
                touchStartX !== null
            ) {
                const currentTouchX = e.targetTouches[0]!.clientX;
                const deltaX = currentTouchX - touchStartX;

                if (!isScrollingY) {
                    setTouchEndX(currentTouchX);
                    setDragAmount(deltaX);

                    controls.set({
                        x: deltaX,
                        opacity: 1 - Math.abs(deltaX) / window.innerWidth,
                    });
                }
            }
        };

        const handleTouchEnd = () => {
            const container = document.getElementById('container');

            if (
                !isActive ||
                touchStartX === null ||
                touchEndX === null ||
                isScrollingY
            ) {
                document.body.style.overflowY = 'auto';
                if (container) {
                    container.style.overflow = '';
                }
                return;
            }
            const distance = touchEndX - touchStartX;
            const screenWidth = window.innerWidth;
            const swipePercentage = Math.abs(distance) / screenWidth;
            if (swipePercentage > swipeThreshold) {
                if (distance > 0) {
                    controls.start({ x: "100vw", opacity: 0.5 }).then(() => {
                        handlePrevPage();
                    });
                } else {
                    controls.start({ x: "-100vw", opacity: 0.5 }).then(() => {
                        handleNextPage();
                    });
                }
            } else {
                const timeoutId = window.setTimeout(() => {
                    controls.start({ x: 0, opacity: 1 }).then(() => {
                        window.setTimeout(() => {
                            document.body.style.overflowY = 'auto';
                            if (container) {
                                container.style.overflow = '';
                            }
                        }, 200);
                        setDragAmount(0);
                    });
                }, 100);

                setResetTimeout(timeoutId);
            }

            setTouchStartX(null);
            setTouchEndX(null);
            setIsScrollingY(false);
        };

        document.addEventListener("touchstart", handleTouchStart);
        document.addEventListener("touchmove", handleTouchMove);
        document.addEventListener("touchend", handleTouchEnd);

        return () => {
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleTouchEnd);

            if (resetTimeout !== null) {
                clearTimeout(resetTimeout);
            }
        };
    }, [
        touchStartX,
        touchEndX,
        controls,
        handleNextPage,
        handlePrevPage,
        isActive,
        isScrollingY,
        resetTimeout,
    ]);

    return (
        <m.div
            animate={controls}
            initial={{ x: 0, opacity: 1 }}
            style={{ touchAction: "none" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            {children}
        </m.div>
    );
}

export default SwipeableScreen;
