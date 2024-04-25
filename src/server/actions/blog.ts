"use server";
import { supabaseBrowser } from "@/lib/supabase/browser";

const supabase = supabaseBrowser();
export async function createBlog(data: any) {
  const { ["content"]: excludedKey, ...blog } = data;
  const resultBlog = await supabase
    .from("blog")
    .insert(blog)
    .select("id")
    .single();
  if (resultBlog.error) {
    return JSON.stringify(resultBlog);
  } else {
    const result = await supabase
      .from("blog_content")
      .insert({ blog_id: resultBlog.data.id, content: data.content })
      .select("id")
      .single();
    return JSON.stringify(result);
  }
}
export async function readBlog() {
  const { data: blogs, error } = await supabase
    .from("blog")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: true });

  if (error) {
    throw error;
  }

  const blogIds = blogs.map((blog) => blog.id);
  const { data: blogTagsData, error: tagsError } = await supabase
    .from("blog_tag")
    .select("*")
    .in("blog_id", blogIds);

  if (tagsError) {
    throw tagsError;
  }
  const tagIds = blogTagsData.map((tag) => tag.tag_id);
  const { data: tagsData, error: tagsDataError } = await supabase
    .from("tag")
    .select("*")
    .in("id", tagIds);

  if (tagsDataError) {
    throw tagsDataError;
  }
  const tagsById: Record<string, any> = {};
  tagsData.forEach((tag) => {
    tagsById[tag.id] = tag;
  });
  const blogsWithTags = blogs.map((blog) => {
    const blogTags = blogTagsData
      .filter((tag) => tag.blog_id === blog.id)
      .map((tag) => tagsById[tag.tag_id!]);
    return {
      ...blog,
      tags: blogTags || [],
    };
  });

  return blogsWithTags;
}
