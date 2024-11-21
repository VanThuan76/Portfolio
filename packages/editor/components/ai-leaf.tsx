"use client";

const { PlateLeaf } = require("@udecode/plate-common/react");

import React from "react";
import { cn, withRef } from "@udecode/cn";

// @ts-ignore
export const AILeaf = withRef<typeof PlateLeaf>(
  ({ children, className, ...props }, ref) => {
    return (
      <PlateLeaf
        ref={ref}
        className={cn(
          "border-b-2 border-b-purple-100 bg-purple-50 text-purple-800",
          "transition-all duration-200 ease-in-out",
          className,
        )}
        {...props}
      >
        {children}
      </PlateLeaf>
    );
  },
);
