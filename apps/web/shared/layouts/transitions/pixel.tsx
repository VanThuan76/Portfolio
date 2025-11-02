"use client";

import React, { useState, useEffect } from "react";
import { m } from "framer-motion";

interface PixelTransitionProps {
  children: React.ReactNode;
}

const anim = {
  initial: {
    opacity: 1,
  },
  open: (delay: [number, number]) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.02 * delay[1] },
  }),
  closed: (delay: [number, number]) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.02 * delay[0] },
  }),
};

const PixelTransition: React.FC<PixelTransitionProps> = ({ children }) => {
  const [windowDimensions, setWindowDimensions] = useState<{
    innerWidth: number;
    innerHeight: number;
  } | null>(null);
  const [didMount, setDidMount] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { innerWidth, innerHeight } = window;
      setWindowDimensions({ innerWidth, innerHeight });
    }
    const timer = setTimeout(() => {
      setDidMount(false);
    }, 100);

    // Cleanup after animation
    const cleanupTimer = setTimeout(() => {
      setShouldRender(false);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanupTimer);
    };
  }, []);

  if (!windowDimensions || !shouldRender) return <>{children}</>;

  const { innerWidth, innerHeight } = windowDimensions;

  const shuffle = (a: any[]): number[] => {
    for (let i = a.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      if (a[i] !== undefined && a[j] !== undefined) {
        [a[i], a[j]] = [a[j], a[i]];
      }
    }
    return a;
  };

  const getBlocks = (indexOfColum: number) => {
    const blockSize = innerHeight * 0.1;
    const nbOfBlocks = Math.min(Math.ceil(innerWidth / blockSize), 30); // Limit to 30 blocks
    const shuffledIndexes = shuffle(
      Array.from({ length: nbOfBlocks }, (_, i) => i),
    );

    return shuffledIndexes.map((randomIndex, index) => (
      <m.div
        key={index}
        className="w-[10vh] h-full bg-white"
        variants={anim}
        initial="initial"
        animate={didMount ? "open" : "closed"}
        custom={[indexOfColum + randomIndex, 10 - indexOfColum + randomIndex]}
        style={{ willChange: "opacity" }}
      />
    ));
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-[9999999999] flex flex-col h-screen overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex w-full h-[10vh]">
            {getBlocks(index)}
          </div>
        ))}
      </div>
      {children}
    </>
  );
};

export default PixelTransition;
