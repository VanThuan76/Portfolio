import { Database } from "@repo/supabase/utils/types";
import { IUser } from "./user";

export type BlogSupabase = Database["public"]["Tables"]["blog"]["Row"];
export type BlogTranslationSupabase =
  Database["public"]["Tables"]["blog_translation"]["Row"];
export type BlogReactionSupabase =
  Database["public"]["Tables"]["blog_reaction"]["Row"];
export type BlogCommentSupabase =
  Database["public"]["Tables"]["blog_comment"]["Row"];
export type BlogTagSupabase = Database["public"]["Tables"]["blog_tag"]["Row"];

export type CommentWithUser = {
  users: IUser | any;
  interactions: CommentWithUser[];
} & BlogCommentSupabase;

export interface IBlog extends BlogSupabase {
  users: IUser | any;
  category_id: number | null;
  content: string | null;
  language_code: string | null;
  slug: string | null;
  title: string | null;
  reactions: BlogReactionSupabase[];
  tags: BlogTagSupabase[];
  comments?: CommentWithUser[];
  total_comment: number;
  translations?: { language_code: string | null; slug: string | null }[];
}

export interface ILanguageContent {
  category_id?: number;
  title?: string;
  tags?: string[];
  content?: any[];
  slug?: string;
}

export interface ICreateBlog {
  image_url?: string;
  created_by?: string;
  contents: ILanguageContent;
}
