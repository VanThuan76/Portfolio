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
      rel: "shortcut icon",
      url: "/logo.png",
    },
  ],
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="antialiased" suppressHydrationWarning>
      <body className={cn("overflow-hidden", mainFont.className)}>
        <Providers messages={messages} locale={locale}>
          <InitContainer>{children}</InitContainer>
        </Providers>
      </body>
    </html>
  );
}
