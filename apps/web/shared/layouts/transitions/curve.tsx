"use client";

import React, { useEffect, useState } from "react";
import { m } from "framer-motion";
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
      {dimensions.width != null && dimensions.height != null && (
        <SVG height={dimensions.height} width={dimensions.width} />
      )}
      {children}
    </div>
  );
}

interface SVGProps {
  height: number;
  width: number;
}

const SVG = ({ height, width }: SVGProps) => {
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
      {...anim(translate)}
      className="fixed top-0 left-0 w-[100w] h-[calc(100vh + 600px)] pointer-events-none"
    >
      <m.path {...anim(curve(initialPath, targetPath))} />
    </m.svg>
  );
};
