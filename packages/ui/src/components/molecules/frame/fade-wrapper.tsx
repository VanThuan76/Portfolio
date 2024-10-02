"use client";

import React from "react";
import { cn } from "@utils/tw";

interface FadeWrapperProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

const FadeWrapper: React.FC<FadeWrapperProps> = ({
  children,
  className,
  isActive = false,
}) => {
  return (
    <div className={cn(className, isActive ? "fade-in" : "opacity-0 hidden")}>
      {children}
    </div>
  );
};

export default FadeWrapper;
