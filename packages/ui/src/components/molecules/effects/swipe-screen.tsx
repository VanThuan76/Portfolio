"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (isActive && e.targetTouches && e.targetTouches.length > 0) {
        setTouchStart(e.targetTouches[0]!.clientX);
        setTouchEnd(null); // Reset touchEnd on new touch start
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isActive && e.targetTouches && e.targetTouches.length > 0) {
        setTouchEnd(e.targetTouches[0]!.clientX);
      }
    };

    const handleTouchEnd = () => {
      if (!isActive || touchStart === null || touchEnd === null) return;

      const distance = touchStart - touchEnd;
      const isSwipe = Math.abs(distance) > minSwipeDistance;

      if (isSwipe) {
        if (distance > 0) {
          // Swiped left
          controls.start({ x: "-100vw" }).then(() => {
            handleNextPage();
          });
        } else {
          // Swiped right
          controls.start({ x: "100vw" }).then(() => {
            handlePrevPage();
          });
        }
      }

      // Reset touch points
      setTouchStart(null);
      setTouchEnd(null);
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
    touchStart,
    touchEnd,
    controls,
    handleNextPage,
    handlePrevPage,
    isActive,
  ]);

  return (
    <motion.div
      animate={controls}
      initial={{ x: 0 }}
      style={{ touchAction: "pan-y" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
}

export default SwipeableScreen;
