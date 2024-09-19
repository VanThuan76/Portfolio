"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@utils/tw";

interface FadeWrapperProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

const FadeWrapper: React.FC<FadeWrapperProps> = ({
  children,
  className,
  isActive = true,
}) => {
  return (
    <>
      {isActive ? (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
            y: "100%",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
          exit={{
            opacity: 0,
            scale: 0,
            y: "100%",
            transition: { duration: 0.5 },
          }}
          className={cn(className, "fade-in")}
        >
          {children}
        </motion.div>
      ) : (
        <div className={cn(className, "fade-in")}>{children}</div>
      )}
    </>
  );
};

export default FadeWrapper;
