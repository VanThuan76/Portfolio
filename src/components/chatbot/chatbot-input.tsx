import { SendHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { IChatBotSend } from "@/server/data/types/chatbot";
import { chatBotSchemaSend } from "@/server/data/validations/chatbot";
import InputTextArea from "@/components/custom/form/input-text-area";

interface Props {
    setMessages: React.Dispatch<React.SetStateAction<any>>
}
const ChatBotInput = ({ setMessages }: Props) => {
    const form = useForm<z.infer<typeof chatBotSchemaSend>>({
        resolver: zodResolver(chatBotSchemaSend),
        defaultValues: {},
    });
    const handleSubmit: SubmitHandler<IChatBotSend> = data => {
        console.log(data)
    };
    return (
        <div className="p-2 flex justify-between w-full items-center gap-2">
            <AnimatePresence initial={false}>
                <Form {...form}>
                    <motion.form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        onError={e => {
                            new Error(`Error ${e}`);
                        }}
                        className="w-full relative"
                        layout
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1 }}
                        transition={{
                            opacity: { duration: 0.05 },
                            layout: {
                                type: "spring",
                                bounce: 0.15,
                            },
                        }}
                    >
                        <InputTextArea form={form} fieldName="query" className=" w-full border rounded-full flex justify-center items-center h-3 resize-none overflow-hidden bg-background" />
                        <button type="submit" className="absolute z-50 bottom-5 right-5 bg-transparent p-0 m-0 hover:bg-transparent border-none">
                            <SendHorizontal size={20} className="text-muted-foreground" />
                        </button>
                    </motion.form>
                </Form>
            </AnimatePresence>
        </div>
    );
}

export default ChatBotInput;