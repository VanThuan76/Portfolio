import { redirect } from "next/navigation";
import { Toaster } from "sonner";
import { OpenAIProvider } from "@repo/editor/components/openai/openai-context";

import { useSupabaseServer } from "@repo/supabase/utils/server";

export default async function BlogNewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await useSupabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/auth/signin");
    return null;
  }

  return (
    <OpenAIProvider>
      {children}
      <Toaster />
    </OpenAIProvider>
  );
}
