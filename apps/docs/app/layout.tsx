import "@styles/globals.css";
import type { Metadata } from "next";
import { cn } from "@utils/tw";
import { Edu_VIC_WA_NT_Beginner } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";

import Providers from "./provider";
import InitContainer from "./_init/init";

export const nextFont = Edu_VIC_WA_NT_Beginner({
  display: "swap",
  weight: ["500", "600", "700"],
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Austin Vu Web",
  description: "Austin Vu",
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
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "transition ease-in-out duration-300 antialiased",
            nextFont.className,
          )}
        >
          <Providers>
            <InitContainer>{children}</InitContainer>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
