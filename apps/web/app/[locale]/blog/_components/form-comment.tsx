"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { PlateEditor } from "@utils/plate-ui";

import { Form } from "@ui/organisms/forms/form";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";

interface Props {
  user: any;
  blogId: string;
}
const FormComment = ({ user, blogId }: Props) => {
  const [content, setContent] = useState();

  // const form = useForm<z.infer<typeof any>>({
  //     resolver: zodResolver(any),
  //     defaultValues: {},
  // });

  // async function onSubmit() {
  //     const body = {
  //         user_id: user.id,
  //         blog_id: blogId,
  //         content: content || "",
  //         like: 0,
  //     };
  //     const result = await createComment(body);
  //     const { error } = JSON.parse(result);
  //     if (error) {
  //         console.log(error?.message);
  //     }
  //     form.reset();
  // }

  return (
    <></>
    // <Form {...form}>
    //     <form
    //         onSubmit={form.handleSubmit(onSubmit)}
    //         onError={(e) => {
    //             new Error(`Error ${e}`);
    //         }}
    //         className="relative flex flex-col items-center justify-center w-full gap-5"
    //     >
    //         <div className="flex items-start justify-start w-full h-full gap-2">
    //             <LoaderImage
    //                 isLoader={false}
    //                 src={user.user_metadata.avatar_url}
    //                 width={24}
    //                 height={24}
    //                 alt="@avatar"
    //                 className="overflow-hidden rounded-full"
    //             />
    //             <div className="relative w-full h-full">
    //                 <PlateEditor
    //                     placeholder="Add to the discussion"
    //                     modeEditor="comment"
    //                     handleChangeContent={setContent}
    //                 />
    //                 <button
    //                     type="submit"
    //                     className="absolute cursor-pointer bottom-3 right-5 hover:scale-110"
    //                 >
    //                     <Send />
    //                 </button>
    //             </div>
    //         </div>
    //     </form>
    // </Form>
  );
};

export default FormComment;
