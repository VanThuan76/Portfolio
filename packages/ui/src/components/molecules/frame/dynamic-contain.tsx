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
  }: MotionContainerProps) => {
    let initial, animate;

    if (type === "slide") {
      switch (direction) {
        case "left":
          initial = { x: "-100%", opacity: 0 };
          animate = { x: "0%", opacity: 1 };
          break;
        case "right":
          initial = { x: "100%", opacity: 0 };
          animate = { x: "0%", opacity: 1 };
          break;
        case "top":
          initial = { y: "-100%", opacity: 0 };
          animate = { y: "0%", opacity: 1 };
          break;
        case "bottom":
          initial = { y: "100%", opacity: 0 };
          animate = { y: "0%", opacity: 1 };
          break;
        case "top-left":
          initial = { x: "-100%", y: "-100%", opacity: 0 };
          animate = { x: "0%", y: "0%", opacity: 1 };
          break;
        case "top-right":
          initial = { x: "100%", y: "-100%", opacity: 0 };
          animate = { x: "0%", y: "0%", opacity: 1 };
          break;
        case "bottom-left":
          initial = { x: "-100%", y: "100%", opacity: 0 };
          animate = { x: "0%", y: "0%", opacity: 1 };
          break;
        case "bottom-right":
          initial = { x: "100%", y: "100%", opacity: 0 };
          animate = { x: "0%", y: "0%", opacity: 1 };
          break;
        default:
          initial = { x: "100%", opacity: 0 };
          animate = { x: "0%", opacity: 1 };
      }
    } else if (type === "scale") {
      initial = { scale: 0.8, opacity: 0 };
      animate = { scale: 1, opacity: 1 };
    } else if (type === "blur") {
      initial = {
        opacity: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        filter: "blur(0px)",
      };
      animate = {
        opacity: 1,
        backgroundColor: "transparent",
        transition: { duration: 1, ease: "easeInOut" },
      };
    }

    return (
      <m.div
        initial={initial}
        animate={animate}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={className}
        onClick={onClick}
        onTouchStart={onTouchStart}
      >
        {children}
      </m.div>
    );
  },
);

export default MotionContainer;
