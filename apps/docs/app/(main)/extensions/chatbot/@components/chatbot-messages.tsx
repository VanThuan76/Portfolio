"use client";
import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { IAuthSupabase } from "@server/data/types/supabase";

import { cn } from "@utils/tw";
import { Avatar, AvatarImage } from "@ui/molecules/ui-elements/avatar";

interface Props {
  user?: IAuthSupabase | any;
  messages: {
    id: string;
    sender: string;
    response: string;
  }[];
}
const ChatBotMessages = ({ user, messages }: Props) => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div
      ref={messagesContainerRef}
      className="w-full overflow-y-auto overflow-x-hidden min-h-[500px] flex flex-col"
    >
      <AnimatePresence>
        {messages &&
          messages.length > 0 &&
          messages.map((message, index) => (
            <motion.div
              key={message.id}
              layout
              initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
              transition={{
                opacity: { duration: 0.1 },
                layout: {
                  type: "spring",
                  bounce: 0.3,
                  duration: messages.indexOf(message) * 0.05 + 0.2,
                },
              }}
              style={{
                originX: 0.5,
                originY: 0.5,
              }}
              className={cn(
                "flex flex-col gap-2 p-4 whitespace-pre-wrap",
                message.sender !== "ai-chatbot" ? "items-end" : "items-start",
              )}
            >
              <div className="flex gap-3 items-center">
                {message.sender === "ai-chatbot" && (
                  <Avatar className="flex justify-center items-center">
                    <AvatarImage
                      src="/chatbot.gif"
                      alt="ChatBot_Avatar"
                      width={6}
                      height={6}
                    />
                  </Avatar>
                )}
                <span className=" bg-accent p-3 rounded-md max-w-md">
                  {message.response}
                </span>
                {message.sender === "user" && (
                  <Avatar className="flex justify-center items-center">
                    <AvatarImage
                      src={user.user_metadata.avatar_url}
                      alt={user.user_metadata.full_name}
                      width={6}
                      height={6}
                    />
                  </Avatar>
                )}
              </div>
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default ChatBotMessages;
