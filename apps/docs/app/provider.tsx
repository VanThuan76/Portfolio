"use client";

import React from "react";
import ReduxProvider from "@shared/lib/providers/redux";
import { ThemeProvider } from "@shared/lib/providers/theme";
import { TooltipProvider } from "@utils/plate-ui/tooltip";
import { ToasterProvider } from "@shared/lib/providers/toaster";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
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
