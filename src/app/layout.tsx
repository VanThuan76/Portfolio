import "./globals.css";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";

import { cn } from "@/lib/tw";
import { ThemeProvider } from "@/utils/theme-provider";
import { IAuthSupabase } from "@/server/data/types/supabase";
import { ToasterProvider } from "@/utils/toaster-provider";
import ReduxProvider from "@/utils/redux-provider";

import { NavBarMenu } from "@/components/custom/extend/navbar";
import { DropdownMenuApp } from "@/components/custom/extend";
import { TooltipProvider } from "@/components/plate-ui/tooltip";
import FrameScreen from "@/components/custom/extend/frame-screen";
import ContainerLayout from "@/components/custom/extend/container-layout";

const NavigationEvents = dynamic(() => import("@/hooks/navigation-event"), {
  ssr: false,
});

const nextFont = DM_Mono({
  display: "swap",
  weight: ["300", "400", "500"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Austin Vu Web",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  user,
}: Readonly<{
  children: React.ReactNode;
  user?: IAuthSupabase | any;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" sizes="any" />
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          nextFont.className,
        )}
        suppressHydrationWarning
      >
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider
              disableHoverableContent
              delayDuration={100}
              skipDelayDuration={0}
            >
              <ContainerLayout>
                <FrameScreen>{children}</FrameScreen>
                <NavigationEvents />
              </ContainerLayout>
              {/* //Other */}
              <NavBarMenu />
              <DropdownMenuApp user={user} />
              <ToasterProvider />
            </TooltipProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
