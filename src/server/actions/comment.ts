"use server";

import { supabaseBrowser } from "@/lib/supabase/browser";
import { Tables } from "@/lib/supabase/types/index";
import { User } from "@/server/data/types/user";

interface BlogCommentWithUser extends Tables<"blog_comment"> {
  users: User;
}

const supabase = supabaseBrowser();
export async function readCommentByBlogId(blogId: string) {
  const data = await supabase
    .from("blog_comment")
    .select(
      `
    *,
    users:user_id (
      id,
      display_name,
      avatar_url
    )
  `,
    )
    .eq("blog_id", blogId);

  // @ts-ignore
  const comments: { data: BlogCommentWithUser[] } = data;
  return comments;
}
export async function createComment(body: {
  blog_id: string;
  user_id: string;
  content: string;
  like: number;
}) {
  const resultComment = await supabase
    .from("blog_comment")
    .insert(body)
    .select("id")
    .single();
  if (resultComment.error) {
    return JSON.stringify(resultComment);
  }
  return JSON.stringify(resultComment);
}
