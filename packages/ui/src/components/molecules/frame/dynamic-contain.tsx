"use client";

import React, { memo } from "react";
import { m } from "framer-motion";

interface MotionContainerProps {
  children: React.ReactNode;
  className?: string;
  direction?:
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";
  type?: "slide" | "scale" | "blur";
  delay?: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onTouchStart?: React.TouchEventHandler<HTMLDivElement>;
}

const MotionContainer = memo(
  ({
    children,
    className,
    onClick,
    onTouchStart,
    direction = "right",
    type = "slide",
    delay
  }: MotionContainerProps) => {

    const animations: any = {
      slide: {
        left: { initial: { x: "-100%", opacity: 0 }, animate: { x: "0%", opacity: 1 } },
        right: { initial: { x: "100%", opacity: 0 }, animate: { x: "0%", opacity: 1 } },
        top: { initial: { y: "-100%", opacity: 0 }, animate: { y: "0%", opacity: 1 } },
        bottom: { initial: { y: "100%", opacity: 0 }, animate: { y: "0%", opacity: 1 } },
        "top-left": { initial: { x: "-100%", y: "-100%", opacity: 0 }, animate: { x: "0%", y: "0%", opacity: 1 } },
        "top-right": { initial: { x: "100%", y: "-100%", opacity: 0 }, animate: { x: "0%", y: "0%", opacity: 1 } },
        "bottom-left": { initial: { x: "-100%", y: "100%", opacity: 0 }, animate: { x: "0%", y: "0%", opacity: 1 } },
        "bottom-right": { initial: { x: "100%", y: "100%", opacity: 0 }, animate: { x: "0%", y: "0%", opacity: 1 } },
      },
      scale: { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 } },
      blur: {
        initial: { opacity: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", filter: "blur(0px)" },
        animate: { opacity: 1, backgroundColor: "transparent", transition: { duration: 1, ease: "easeInOut" } },
      },
    };

    const { initial, animate } = animations[type][direction] || animations.slide.right;

    return (
      <m.div
        initial={initial}
        animate={animate}
        transition={{ duration: 1, ease: "easeInOut", delay: delay }}
        className={className}
        onClick={onClick}
        onTouchStart={onTouchStart}
      >
        {children}
      </m.div>
    );
  }
);

export default MotionContainer;
