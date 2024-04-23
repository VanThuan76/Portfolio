"use client";
import BlogForm from "@/app/admin/components/blog/blog-form";
import { createBlog } from "@/server/actions/blog";
import { IBlogCreate } from "@/server/data/types/blog";
import { SubmitHandler } from "react-hook-form";

export default function Page() {
  const handleSubmit: SubmitHandler<IBlogCreate> = async (data) => {
    const result = await createBlog(data);
    const { error } = JSON.parse(result);
    console.log(error?.message);
  };
  return <BlogForm handleSubmit={handleSubmit} />;
}
