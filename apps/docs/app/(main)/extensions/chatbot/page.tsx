import { currentProfile } from "@server/actions/auth";

import ChatBotBody from "./@components/chatbot-body";
import ChatBotHead from "./@components/chatbot-head";

export default async function Page() {
  const user = await currentProfile();
  return (
    <div className="z-10 mt-5 border rounded-lg w-full flex flex-col justify-between items-center h-full text-sm lg:flex">
      <ChatBotHead />
      <ChatBotBody user={user} />
    </div>
  );
}
