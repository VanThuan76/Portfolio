"use client";

import ReduxProvider from "@providers/redux";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { ReactQueryClientProvider } from "@providers/react-query";
import { ThemeProvider } from "@providers/theme";
import { ToasterProvider } from "@providers/toaster";

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
                        {children}
                        <ToasterProvider />
                    </ThemeProvider>
                </ReduxProvider>
            </ReactQueryClientProvider>
        </NextIntlClientProvider>
    );
}
