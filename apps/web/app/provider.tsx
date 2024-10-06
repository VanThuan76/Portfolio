"use client";

import React from "react";
import ReduxProvider from "@providers/redux";
import { ReactQueryClientProvider } from "@providers/react-query";
import { ThemeProvider } from "@providers/theme";
import { ToasterProvider } from "@providers/toaster";
import { TooltipProvider } from "@utils/plate-ui/tooltip";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <React.StrictMode>
      <ReactQueryClientProvider>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <TooltipProvider
              disableHoverableContent
              delayDuration={100}
              skipDelayDuration={0}
            >
              {children}
            </TooltipProvider>
            <ToasterProvider />
          </ThemeProvider>
        </ReduxProvider>
      </ReactQueryClientProvider>
    </React.StrictMode>
  );
}
