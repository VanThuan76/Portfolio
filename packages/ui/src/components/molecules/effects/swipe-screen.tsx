"use client";
import React, { useState, useEffect } from "react";

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
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const swipeThreshold = 0.3;

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (isActive && e.targetTouches && e.targetTouches.length > 0) {
        setTouchStartX(e.targetTouches[0]!.clientX);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartX !== null && isActive) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX === null || !isActive) {
        return;
      }

      const touchEndX = e.changedTouches[0]!.clientX;
      const distance = touchEndX - touchStartX;
      const screenWidth = window.innerWidth;
      const swipePercentage = Math.abs(distance) / screenWidth;

      if (swipePercentage > swipeThreshold) {
        if (distance > 0) {
          handlePrevPage();
        } else {
          handleNextPage();
        }
      }

      setTouchStartX(null);
    };

    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.addEventListener("touchmove", handleTouchMove, { passive: false }); // Không passivo để có thể gọi preventDefault
    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStartX, handleNextPage, handlePrevPage, isActive]);

  return <div className="w-full h-full grid place-items-center overflow-y-auto md:overflow-hidden" style={{ touchAction: "none" }}>{children}</div>;
}

export default SwipeableScreen;
