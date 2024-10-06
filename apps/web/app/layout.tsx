import "@styles/globals.css";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";

import { cn } from "@utils/tw";
import { mainFont } from "@shared/utils/font";

import Providers from "./provider";
import InitContainer from "./_init";

export const metadata: Metadata = {
  title: "Austin Vu",
  description:
    "Welcome to the portfolio of Austin Vu, showcasing projects, skills, and achievements.",
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/logo.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/logo.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/logo.png",
    },
    {
      rel: "icon",
      url: "logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className="antialiased" suppressHydrationWarning>
        <body className={cn("overflow-hidden", mainFont.className)}>
          <Providers>
            <InitContainer>{children}</InitContainer>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
