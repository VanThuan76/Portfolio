import { OpenAIProvider } from "@repo/editor/components/openai/openai-context";
import { Toaster } from "sonner";

export default function BlogNewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen" data-lenis-prevent="false">
      <OpenAIProvider>{children}</OpenAIProvider>
      <Toaster />
    </div>
  );
}
