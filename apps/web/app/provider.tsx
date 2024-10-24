"use client";

import ReduxProvider from "@providers/redux";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { ReactQueryClientProvider } from "@providers/react-query";
import { ThemeProvider } from "@providers/theme";
import { ToasterProvider } from "@providers/toaster";
import { TooltipProvider } from "@utils/plate-ui/tooltip";

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
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <TooltipProvider
              disableHoverableContent
              delayDuration={100}
              skipDelayDuration={0}
            >
              {children}
            </TooltipProvider>
            <ToasterProvider />
          </ThemeProvider>
        </ReduxProvider>
      </ReactQueryClientProvider>
    </NextIntlClientProvider>
  );
}
