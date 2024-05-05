"use client";
import { Send } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema } from "@/server/data/validations/comment";
import { PlateEditor } from "@/components/plate-ui";
import { IAuthSupabase } from "@/server/data/types/supabase";
import { createComment } from "@/server/actions/comment";

interface Props {
  user: IAuthSupabase | any;
  blogId: string;
}
const FormComment = ({ user, blogId }: Props) => {
  const [content, setContent] = useState();

  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {},
  });

  async function onSubmit() {
    const body = {
      user_id: user.id,
      blog_id: blogId,
      content: content || "",
      like: 0,
    };
    const result = await createComment(body);
    const { error } = JSON.parse(result);
    if (error) {
      console.log(error?.message);
    }
    form.reset();
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
              modeEditor="comment"
              handleChangeContent={setContent}
            />
            <button
              type="submit"
              className="absolute bottom-3 right-5 cursor-pointer hover:scale-110"
            >
              <Send />
            </button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default FormComment;
