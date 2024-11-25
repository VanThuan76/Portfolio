import { OpenAIProvider } from "@repo/editor/components/openai/openai-context";
import { Toaster } from "sonner";

export default function BlogNewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OpenAIProvider>
      {children}
      <Toaster />
    </OpenAIProvider>
  );
}
