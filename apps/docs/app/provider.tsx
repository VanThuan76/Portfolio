"use client";

import React from "react";
import ReduxProvider from "@shared/lib/providers/redux";
import { ThemeProvider } from "@shared/lib/providers/theme";
import { TooltipProvider } from "@utils/plate-ui/tooltip";
import { ToasterProvider } from "@shared/lib/providers/toaster";
import useBreakpoint from "@shared/hooks/use-break-point";

export default function Providers({ children }: { children: React.ReactNode }) {
  const breakpoint = useBreakpoint();
  return (
    <ReduxProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme={breakpoint === "xs" ? "light" : "system"}
        enableSystem={false}
        disableTransitionOnChange
      >
        <TooltipProvider
          disableHoverableContent
          delayDuration={100}
          skipDelayDuration={0}
        >
          {children}
          <ToasterProvider />
        </TooltipProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}
