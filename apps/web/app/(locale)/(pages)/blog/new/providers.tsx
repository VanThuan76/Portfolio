"use client";

import { OpenAIProvider } from "@repo/editor/components/openai/openai-context";

export function BlogNewProviders({ children }: { children: React.ReactNode }) {
  return <OpenAIProvider>{children}</OpenAIProvider>;
}
