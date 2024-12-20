import "@repo/design-system/styles/globals.css";

// Next.js
import type { Metadata } from "next";
import { headers } from "next/headers";
import { getMessages } from "next-intl/server";
import { ViewTransitions } from "next-view-transitions";
// Utilities
import { cn } from "@repo/design-system/utils/tw";
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
    "Explore Austin Vu's portfolio, showcasing innovative web development projects, cutting-edge designs, and technical expertise.",
  keywords: [
    "Austin Vu",
    "Web Developer",
    "Portfolio",
    "UI/UX Design",
    "Frontend Development",
    "Web Design Projects",
  ],
  authors: [{ name: "Austin Vu", url: "https://www.austinvu.tech" }],
  openGraph: {
    title: "Austin Vu Portfolio",
    description:
      "Discover the professional journey of Austin Vu, a web developer specializing in creative designs and efficient web solutions.",
    url: "https://www.austinvu.tech",
    type: "website",
    images: [
      {
        url: "https://www.austinvu.tech/logo.png",
        width: 800,
        height: 600,
        alt: "Austin Vu Portfolio Logo",
      },
    ],
  },
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerNext = await headers();
  const locale = headerNext.get("x-my-locale") || "en";

  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      className={cn("antialiased font-sf-display")}
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
