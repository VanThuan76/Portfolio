// Global Styles
import "@styles/globals.css";

// Next.js
import type { Metadata } from "next";
import { getMessages } from "next-intl/server";

// Utilities
import { cn } from "@utils/tw";
import { mainFont } from "@shared/utils/font";

// Layouts and Providers
import InitContainer from "@shared/layouts";
import Providers from "../provider";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.austinvu.tech"),
  title: {
    default: "Austin Vu",
    template: `%s | Austin Vu`,
  },
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
      rel: "shortcut icon",
      url: "/logo.png",
    },
  ],
  verification: {
    google:
      "google-site-verification=ElmoiyHemDoFnDuWJkNG-LPQ5rPQ-4hquKSJgWPpid4",
  },
};

export default async function RootLayout({
  children,
  params: { locale },
  ...props
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages({ locale });

  return (
    <ViewTransitions>
      <html lang={locale} className="antialiased" suppressHydrationWarning>
        <body className={cn("overflow-hidden", mainFont.className)}>
          <Providers messages={messages} locale={locale}>
            <InitContainer {...props}>{children}</InitContainer>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
