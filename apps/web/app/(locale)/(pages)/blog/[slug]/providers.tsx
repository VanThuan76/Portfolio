"use client";

import { OpenAIProvider } from "@repo/editor/components/openai/openai-context";
import ReCaptchaProvider from "@/providers/re-captcha";

export function BlogSlugProviders({ children }: { children: React.ReactNode }) {
  return (
    <ReCaptchaProvider>
      <OpenAIProvider>{children}</OpenAIProvider>
    </ReCaptchaProvider>
  );
}
