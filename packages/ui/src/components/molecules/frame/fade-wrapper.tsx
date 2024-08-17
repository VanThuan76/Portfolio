"use client";

import React from "react";
import { cn } from "@utils/tw";

const FadeWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {

    return (
        <div className={cn(className, "fade-in")}>
            {children}
        </div>
    );
}

export default FadeWrapper;