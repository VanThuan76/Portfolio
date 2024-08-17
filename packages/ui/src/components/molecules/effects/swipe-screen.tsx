"use client";
import React, { useState, useEffect } from "react";
import { m, useAnimation } from "framer-motion";

function SwipeableScreen({
  children,
  handleNextPage,
  handlePrevPage,
  isActive,
  isPageLoading, // New prop to track loading status
}: {
  children: React.ReactNode;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  isActive: boolean;
  isPageLoading: boolean; // New prop to track loading status
}) {
  const controls = useAnimation();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [dragAmount, setDragAmount] = useState<number>(0);

  const minSwipeDistance = 50;

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (isActive && e.targetTouches && e.targetTouches.length > 0) {
        setTouchStart(e.targetTouches[0]!.clientX);
        setTouchEnd(null);
        setDragAmount(0);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isActive && e.targetTouches && e.targetTouches.length > 0 && touchStart !== null) {
        const currentTouch = e.targetTouches[0]!.clientX;
        setTouchEnd(currentTouch);

        const dragDelta = currentTouch - touchStart;
        setDragAmount(dragDelta);
        
        controls.set({
          x: dragDelta,
          opacity: 1 - Math.abs(dragDelta) / 500,
        });
      }
    };

    const handleTouchEnd = () => {
      if (!isActive || touchStart === null || touchEnd === null) return;

      const distance = touchStart - touchEnd;
      const isSwipe = Math.abs(distance) > minSwipeDistance;

      if (isSwipe && !isPageLoading) { // Only allow swipe if the page is not loading
        if (distance > 0) {
          // Swiped left
          controls.start({ x: "-100vw", opacity: 0.5 }).then(() => {
            handleNextPage();
          });
        } else {
          // Swiped right
          controls.start({ x: "100vw", opacity: 0.5 }).then(() => {
            handlePrevPage();
          });
        }
      } else {
        // Reset the position if the swipe was not far enough
        controls.start({ x: 0, opacity: 1 });
      }

      setTouchStart(null);
      setTouchEnd(null);
      setDragAmount(0);
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStart, touchEnd, controls, handleNextPage, handlePrevPage, isActive, isPageLoading]);

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