import "@repo/design-system/styles/globals.css";

// Next.js
import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { ViewTransitions } from "next-view-transitions";
// Utilities
import { cn } from "@repo/design-system/utils/tw";
import { mainFont } from "@shared/utils/font";
import { routing } from "@/i18n/navigation";

// Layouts and Providers
import Providers from "@providers/index";
import LazyWrapper from "@repo/design-system/components/molecules/frame/lazy-wrapper";

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

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
    messages: getMessages({ locale }),
  }));
}

export const revalidate = 86400;

export default async function RootLayout({
  children,
  params,
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
      <ViewTransitions>
        <body>
          <LazyWrapper>
            <Providers messages={messages} locale={locale}>
              {children}
            </Providers>
          </LazyWrapper>
        </body>
      </ViewTransitions>
    </html>
  );
}
