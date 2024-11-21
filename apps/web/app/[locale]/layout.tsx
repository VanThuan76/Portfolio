import "@repo/design-system/styles/globals.css";

// Next.js
import type { Metadata } from "next";
import Head from "next/head";
import { getMessages } from "next-intl/server";
import { ViewTransitions } from "next-view-transitions";
// Utilities
import { mainFont } from "@shared/utils/font";

// Layouts and Providers
import InitContainer from "@shared/layouts";
import Providers from "@providers/index";
import { cn } from "@repo/design-system/utils/tw";

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

export const revalidate = 0;

export default async function RootLayout({
  children,
  params,
  ...props
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      className={cn("antialiased", mainFont.className)}
      suppressHydrationWarning
    >
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
      <ViewTransitions>
        <body>
          <Providers messages={messages} locale={locale}>
            <InitContainer {...props}>{children}</InitContainer>
          </Providers>
        </body>
      </ViewTransitions>
    </html>
  );
}
