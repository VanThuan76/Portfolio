"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { IBlogCreate } from "@server/data/types/blog";
import { blogCreateSchema } from "@server/data/validations/blog";

import BlogForm from "../../../@components/blog/blog-form";

export default function Page() {
  const form = useForm<z.infer<typeof blogCreateSchema>>({
    resolver: zodResolver(blogCreateSchema),
    defaultValues: {},
  });
  const handleSubmit: SubmitHandler<IBlogCreate> = async (data) => {
    // const result = await createBlog(data);
    // const { error } = JSON.parse(result);
    // console.log(error?.message);
  };

  return <BlogForm form={form} handleSubmit={handleSubmit} />;
}
