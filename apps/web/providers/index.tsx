"use client";

import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { Toaster } from "sonner";

import ReduxProvider from "@repo/management-system/provider";
import DesignSystemProvider from "@repo/design-system";
import ReactQueryClientProvider from "@providers/react-query";
import LenisScrollProvider from "@providers/lenis-scroll";

export default function Providers({
  children,
  messages,
  locale = "en",
}: {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale?: string;
}) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <ReactQueryClientProvider>
        <ReduxProvider>
          <DesignSystemProvider>
            <LenisScrollProvider className="relative z-50 pointer-events-none">
              {children}
            </LenisScrollProvider>
            <Toaster />
          </DesignSystemProvider>
        </ReduxProvider>
      </ReactQueryClientProvider>
    </NextIntlClientProvider>
  );
}
