'use client'

import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema } from "@/server/data/validations/comment";
import { PlateEditor } from "@/components/plate-ui";
import { IAuthSupabase } from "@/server/data/types/supabase";

interface Props {
    user: IAuthSupabase | any
}
const FormComment = ({ user }: Props) => {
    const form = useForm<z.infer<typeof commentSchema>>({
        resolver: zodResolver(commentSchema),
        defaultValues: {},
    });

    function onSubmit(data: z.infer<typeof commentSchema>) {
        console.log(data)
    }

    function handleChangeContent() {

    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                onError={(e) => {
                    new Error(`Error ${e}`);
                }}
                className="relative w-full flex flex-col justify-center items-center gap-5"
            >
                <div className="w-full h-full flex justify-start items-start gap-2">
                    <Image
                        src={user.user_metadata.avatar_url}
                        width={24}
                        height={24}
                        alt="Avatar"
                        className="overflow-hidden rounded-full"
                    />
                    <div className="w-full relative h-full">
                        <PlateEditor
                            placeholder="Add to the discussion"
                            handleChangeContent={handleChangeContent}
                        />
                    </div>
                </div>
            </form>
        </Form>
    );
}

export default FormComment;