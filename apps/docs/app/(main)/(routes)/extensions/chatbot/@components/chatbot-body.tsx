"use client";
import { z } from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { IAuthSupabase } from "@server/data/types/supabase";
import { prompt } from "@server/actions/azure";
import { IChatBotSend } from "@server/data/types/chatbot";
import { chatBotSchemaSend } from "@server/data/validations/chatbot";

import ChatBotInput from "./chatbot-input";
import ChatBotMessages from "./chatbot-messages";

export type Message = {
  sender: string;
  response: string;
  id: string;
};

interface Props {
  user: IAuthSupabase | any;
}

const ChatBotBody = ({ user }: Props) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const form = useForm<z.infer<typeof chatBotSchemaSend>>({
    resolver: zodResolver(chatBotSchemaSend),
    defaultValues: {},
  });
  const handleSubmit: SubmitHandler<IChatBotSend> = async (data) => {
    form.reset();
    const id = Math.random().toString(36);
    const userMessage = {
      sender: "user",
      response: data.query,
      id: id,
    };
    setMessages((prevMessages: any) => [...prevMessages, userMessage]);
    const res = await prompt(data.query);
    setMessages((prevMessages: any) => [
      ...prevMessages.slice(0, -1),
      userMessage,
      res,
    ]);
  };

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col">
      <ChatBotMessages messages={messages} user={user} />
      <ChatBotInput form={form} handleSubmit={handleSubmit} />
    </div>
  );
};

export default ChatBotBody;
