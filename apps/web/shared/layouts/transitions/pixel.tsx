"use client";

import React from "react";
import { m } from "framer-motion";

interface PixelTransitionProps {
  isActive: boolean;
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

const PixelTransition: React.FC<PixelTransitionProps> = ({
  children,
  isActive,
}) => {
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
    const { innerWidth, innerHeight } = window;
    const blockSize = innerHeight * 0.1;
    const nbOfBlocks = Math.ceil(innerWidth / blockSize);
    const shuffledIndexes = shuffle(
      Array.from({ length: nbOfBlocks }, (_, i) => i),
    );

    return shuffledIndexes.map((randomIndex, index) => (
      <m.div
        key={index}
        className="w-[10vh] h-full bg-white"
        variants={anim}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        custom={[indexOfColum + randomIndex, 10 - indexOfColum + randomIndex]}
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
