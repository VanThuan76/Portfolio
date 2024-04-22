'use client'
import { useState } from "react";
import { IAuthSupabase } from "@/server/data/types/supabase";
import ChatBotInput from "./chatbot-input";
import ChatBotMessages from "./chatbot-messages";

interface Props {
    user: IAuthSupabase | any
}
const ChatBotBody = ({ user }: Props) => {
    const [messages, setMessages] = useState(user ? [{ id: 1, role: 'assistant', messages: [{ id: 1, content: "Welcome to chatbot assistant" }] }] : []);
    return (
        <div className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col">
            <ChatBotMessages messages={messages} user={user} />
            <ChatBotInput setMessages={setMessages}/>
        </div>
    );
}

export default ChatBotBody;