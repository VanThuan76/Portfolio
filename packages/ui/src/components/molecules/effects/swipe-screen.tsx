"use client";
import React, { useState, useEffect } from "react";
import { m, useAnimation } from "framer-motion";

function SwipeableScreen({
  children,
  handleNextPage,
  handlePrevPage,
  isActive,
  isPageLoading, 
}: {
  children: React.ReactNode;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  isActive: boolean;
  isPageLoading: boolean;
}) {
  const controls = useAnimation();
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [dragAmount, setDragAmount] = useState<number>(0);
  const [isScrollingY, setIsScrollingY] = useState<boolean>(false);

  const minSwipeDistance = 50;

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (isActive && e.targetTouches && e.targetTouches.length > 0) {
        setTouchStartX(e.targetTouches[0]!.clientX);
        setTouchStartY(e.targetTouches[0]!.clientY);
        setTouchEndX(null);
        setIsScrollingY(false); 
        setDragAmount(0);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (
        isActive &&
        e.targetTouches &&
        e.targetTouches.length > 0 &&
        touchStartX !== null &&
        touchStartY !== null
      ) {
        const currentTouchX = e.targetTouches[0]!.clientX;
        const currentTouchY = e.targetTouches[0]!.clientY;
        const deltaX = currentTouchX - touchStartX;
        const deltaY = currentTouchY - touchStartY;

        if (Math.abs(deltaY) > Math.abs(deltaX)) {
          setIsScrollingY(true);
          return;
        }

        setTouchEndX(currentTouchX);
        setDragAmount(deltaX);

        controls.set({
          x: deltaX,
          opacity: 1 - Math.abs(deltaX) / 500,
        });
      }
    };

    const handleTouchEnd = () => {
      if (!isActive || touchStartX === null || touchEndX === null || isScrollingY) return;

      const distance = touchStartX - touchEndX;
      const isSwipe = Math.abs(distance) > minSwipeDistance;

      if (isSwipe && !isPageLoading) {
        if (distance > 0) {
          controls.start({ x: "-100vw", opacity: 0.5 }).then(() => {
            handleNextPage();
          });
        } else {
          controls.start({ x: "100vw", opacity: 0.5 }).then(() => {
            handlePrevPage();
          });
        }
      } else {
        controls.start({ x: 0, opacity: 1 }).then(() => {
          setDragAmount(0);
        });
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
    };
  }, [
    touchStartX,
    touchEndX,
    controls,
    handleNextPage,
    handlePrevPage,
    isActive,
    isPageLoading,
    isScrollingY,
  ]);

  return (
    <m.div
      animate={controls}
      initial={{ x: 0, opacity: 1 }}
      style={{ touchAction: "pan-y" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </m.div>
  );
}

export default SwipeableScreen;