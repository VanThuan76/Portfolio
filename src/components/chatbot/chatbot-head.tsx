'use client'
import { Dot } from "lucide-react";
import { motion } from "framer-motion";

const ChatBotHead = () => {
    return (<div className="flex flex-col justify-between w-full h-full">
        <div className="w-full h-20 flex p-4 justify-between items-center border-b">
            <div className="flex items-center gap-2">
                <motion.div className="relative flex justify-center items-center">
                    <motion.img
                        src="/chatbot.gif"
                        alt="ChatBot_Image"
                        width={6}
                        height={6}
                        className="w-10 h-10 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ repeat: Infinity, repeatDelay: 5, duration: 1 }}
                    />
                    <Dot color="#03CF02" className="absolute -top-5 -right-5" />
                </motion.div>
                <div className="flex flex-col">
                    <span className="font-medium">ChatBot</span>
                    <span className="text-xs">Active Now</span>
                </div>
            </div>
        </div>
    </div>);
}

export default ChatBotHead;