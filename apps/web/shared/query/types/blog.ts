import { Database } from "@shared/utils/supabase/types";

export type BlogSupabase = Database["public"]["Tables"]["blog"]["Row"];
export type BlogCommentSupabase =
  Database["public"]["Tables"]["blog_comment"]["Row"];
export type BlogTagSupabase = Database["public"]["Tables"]["blog_tag"]["Row"];

export interface IBlog extends BlogSupabase {
  blog_category: string | null;
  tags: BlogTagSupabase[];
  comments: BlogCommentSupabase[];
}
