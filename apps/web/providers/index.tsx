"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
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
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <NextIntlClientProvider messages={messages} locale={locale}>
        <ReactQueryClientProvider>
          <ReduxProvider>
            <DesignSystemProvider>{children}</DesignSystemProvider>
          </ReduxProvider>
        </ReactQueryClientProvider>
      </NextIntlClientProvider>
    </GoogleReCaptchaProvider>
  );
}
