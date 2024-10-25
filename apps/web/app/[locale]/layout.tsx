// Global Styles
import "@styles/globals.css";

// Next.js
import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { ViewTransitions } from "next-view-transitions";
import Head from "next/head";

// Utilities
import { cn } from "@utils/tw";
import { mainFont } from "@shared/utils/font";

// Layouts and Providers
import InitContainer from "@shared/layouts";
import Providers from "../provider";

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
        <Head>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
        </Head>
        <body className={cn("overflow-hidden", mainFont.className)}>
          <Providers messages={messages} locale={locale}>
            <InitContainer {...props}>{children}</InitContainer>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
