import ChatBotHead from "@/app/(extend)/extensions/chatbot/@components/chatbot-head";
import ChatBotBody from "@/app/(extend)/extensions/chatbot/@components/chatbot-body";
import { currentProfile } from "@/server/actions/auth";

export default async function Page() {
  const user = await currentProfile();
  return (
    <div className="z-10 mt-5 border rounded-lg w-full flex flex-col justify-between items-center h-full text-sm lg:flex">
      <ChatBotHead />
      <ChatBotBody user={user} />
    </div>
  );
}
