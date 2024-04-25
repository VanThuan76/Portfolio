import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabase/server";
import ChatBotHead from "@/app/extensions/chatbot/components/chatbot-head";
import ChatBotBody from "@/app/extensions/chatbot/components/chatbot-body";

export default async function Page() {
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/");
  return (
    <div className="z-10 mt-5 border rounded-lg w-full flex flex-col justify-between items-center h-full text-sm lg:flex">
      <ChatBotHead />
      <ChatBotBody user={user} />
    </div>
  );
}
