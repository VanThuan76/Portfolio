"use client";

import React from "react";
import { m } from "framer-motion";

interface MotionContainerProps {
  id?: string;
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
  isClose?: boolean;
}
const MotionContainer = ({
  id,
  children,
  className,
  onClick,
  onTouchStart,
  direction,
  type = "slide",
  delay,
  isClose = false,
}: MotionContainerProps) => {
  const animations: any = {
    slide: {
      left: {
        initial: isClose ? { x: "0%", opacity: 1 } : { x: "-100%", opacity: 0 },
        animate: isClose ? { x: "100%", opacity: 0 } : { x: "0%", opacity: 1 },
      },
      right: {
        initial: isClose ? { x: "0%", opacity: 1 } : { x: "100%", opacity: 0 },
        animate: isClose ? { x: "-100%", opacity: 0 } : { x: "0%", opacity: 1 },
      },
      top: {
        initial: isClose ? { y: "0%", opacity: 1 } : { y: "-100%", opacity: 0 },
        animate: isClose ? { y: "100%", opacity: 0 } : { y: "0%", opacity: 1 },
      },
      bottom: {
        initial: isClose ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 },
        animate: isClose ? { y: "-100%", opacity: 0 } : { y: "0%", opacity: 1 },
      },
      "top-left": {
        initial: isClose
          ? { x: "0%", y: "0%", opacity: 1 }
          : { x: "-100%", y: "-100%", opacity: 0 },
        animate: isClose
          ? { x: "100%", y: "100%", opacity: 0 }
          : { x: "0%", y: "0%", opacity: 1 },
      },
      "top-right": {
        initial: isClose
          ? { x: "0%", y: "0%", opacity: 1 }
          : { x: "100%", y: "-100%", opacity: 0 },
        animate: isClose
          ? { x: "-100%", y: "100%", opacity: 0 }
          : { x: "0%", y: "0%", opacity: 1 },
      },
      "bottom-left": {
        initial: isClose
          ? { x: "0%", y: "0%", opacity: 1 }
          : { x: "-100%", y: "100%", opacity: 0 },
        animate: isClose
          ? { x: "100%", y: "-100%", opacity: 0 }
          : { x: "0%", y: "0%", opacity: 1 },
      },
      "bottom-right": {
        initial: isClose
          ? { x: "0%", y: "0%", opacity: 1 }
          : { x: "100%", y: "100%", opacity: 0 },
        animate: isClose
          ? { x: "-100%", y: "-100%", opacity: 0 }
          : { x: "0%", y: "0%", opacity: 1 },
      },
    },
    scale: {
      initial: isClose ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 },
      animate: isClose ? { scale: 0.8, opacity: 0 } : { scale: 1, opacity: 1 },
    },
    blur: {
      initial: isClose
        ? {
            opacity: 1,
            backgroundColor: "transparent",
            filter: "blur(0px)",
          }
        : {
            opacity: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            filter: "blur(0px)",
          },
      animate: isClose
        ? {
            opacity: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            filter: "blur(0px)",
            transition: { duration: 1, ease: "easeInOut" },
          }
        : {
            opacity: 1,
            backgroundColor: "transparent",
            transition: { duration: 1, ease: "easeInOut" },
          },
    },
  };

  const { initial, animate } =
    type && direction
      ? animations[type][direction]
      : type
        ? animations[type]
        : animations.slide.right;

  return (
    <m.div
      id={id}
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
};

export default MotionContainer;
