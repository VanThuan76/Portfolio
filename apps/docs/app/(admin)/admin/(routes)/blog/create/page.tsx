"use client";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { IBlogCreate } from "@server/data/types/blog";
import { blogCreateSchema } from "@server/data/validations/blog";

import BlogForm from "../../../@components/blog/blog-form";

export default function Page() {
  const router = useRouter();

  const form = useForm<z.infer<typeof blogCreateSchema>>({
    resolver: zodResolver(blogCreateSchema),
    defaultValues: {},
  });

  const handleSubmit: SubmitHandler<IBlogCreate> = async (data) => {
    // const result = await createBlog(data);
    // const { error } = JSON.parse(result);
    // if (error) {
    //   console.log(error?.message);
    // }
    form.reset();
    router.refresh();
    window.location.reload();
  };

  return <BlogForm form={form} handleSubmit={handleSubmit} />;
}
