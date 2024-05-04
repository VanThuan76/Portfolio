"use server";

import { supabaseBrowser } from "@/lib/supabase/browser";

const supabase = supabaseBrowser();
export async function readCommentByBlogId(blogId: string) {
    const comments = await supabase
        .from("blog_comment")
        .select('*, users ( id, display_name, avatar_url )')
        .eq("blog_id", blogId)
    return comments;
}
export async function createComment(body: { blog_id: string, user_id: string, content: string, like: number }) {
    const resultComment = await supabase.from("blog_comment").insert(body).select('id').single();
    if (resultComment.error) {
        return JSON.stringify(resultComment);
    }
    return JSON.stringify(resultComment);
}
