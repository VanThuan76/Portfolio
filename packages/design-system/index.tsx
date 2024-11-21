"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import ToasterProvider from "./utils/toaster";

export default function DesignSystemProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
      <ToasterProvider />
    </NextThemesProvider>
  );
}
