"use client";

import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import ToasterProvider from "./utils/toaster";

type DesignSystemProviderProperties = ThemeProviderProps;

export default function DesignSystemProvider({
  children,
  ...properties
}: DesignSystemProviderProperties) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      {...properties}
    >
      {children}
      <ToasterProvider />
    </NextThemesProvider>
  );
}
