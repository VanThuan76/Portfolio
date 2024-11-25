"use client";

import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

import ReduxProvider from "@repo/management-system/provider";
import DesignSystemProvider from "@repo/design-system";
import ReactQueryClientProvider from "@providers/react-query";

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
          <DesignSystemProvider>{children}</DesignSystemProvider>
        </ReduxProvider>
      </ReactQueryClientProvider>
    </NextIntlClientProvider>
  );
}
