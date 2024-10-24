"use client";
import React, { useEffect, useState } from "react";
import { m } from "framer-motion";
import { cn } from "@utils/tw";

interface Dimensions {
  width: number | null;
  height: number | null;
}

interface CurveTransitionProps {
  children: React.ReactNode;
  backgroundColor: string;
}

const anim = (variants: any) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};
export const text = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 0,
    top: -100,
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: { top: "47.5%" },
  },
  exit: {
    opacity: 1,
    top: "40%",
    transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
  },
};

export const curve = (initialPath, targetPath) => {
  return {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  };
};

export const translate = {
  initial: {
    top: "-300px",
  },
  enter: {
    top: "-100vh",
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: {
      top: "100vh",
    },
  },
  exit: {
    top: "-300px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function CurveTransition({
  children,
  backgroundColor,
}: CurveTransitionProps) {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: null,
    height: null,
  });
  const [svgVisible, setSvgVisible] = useState(true);

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full h-full" style={{ backgroundColor }}>
      {dimensions.width !== null &&
        dimensions.height !== null &&
        svgVisible && (
          <SVG
            width={dimensions.width}
            height={dimensions.height}
            onAnimationComplete={() => setSvgVisible(false)}
          />
        )}
      {children}
    </div>
  );
}

interface SVGProps {
  height: number;
  width: number;
  onAnimationComplete: () => void;
}

const SVG = ({ height, width, onAnimationComplete }: SVGProps) => {
  const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <m.svg
      className="fixed top-0 left-0 z-50 inset-0 pointer-events-none w-full h-[calc(100vh+600px)]"
      {...anim(translate)}
      onAnimationComplete={onAnimationComplete}
    >
      <m.path fill="white" {...anim(curve(initialPath, targetPath))} />
    </m.svg>
  );
};
