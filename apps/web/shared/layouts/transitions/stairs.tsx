"use client";

import { m } from "framer-motion";
import React from "react";

export const expand = {
  initial: {
    top: 0,
  },
  enter: (i: number) => ({
    top: "100vh",
    transition: {
      duration: 0.75,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: { height: "0", top: "0" },
  }),
  exit: (i: number) => ({
    height: "100vh",
    transition: {
      duration: 0.75,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export const opacity = {
  initial: {
    opacity: 0.5,
  },
  enter: {
    opacity: 0,
  },
  exit: {
    opacity: 0.5,
  },
};

interface StairsTransitionProps {
  children: React.ReactNode;
}

export default function StairsTransition({ children }: StairsTransitionProps) {
  const anim = (variants: any, custom: any = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  const nbOfColumns = 5;

  return (
    <div className="relative w-full h-full bg-transparent">
      <m.div
        {...anim(opacity)}
        className="fixed top-0 left-0 w-full h-screen bg-black"
      />
      <div className="fixed top-0 left-0 z-50 flex w-full h-screen pointer-events-none">
        {[...Array(nbOfColumns)].map((_, i) => (
          <m.div
            key={i}
            {...anim(expand, nbOfColumns - i)}
            className="relative w-full h-full bg-white"
          />
        ))}
      </div>
      {children}
    </div>
  );
}
