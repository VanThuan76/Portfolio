import { ITag } from "./tag";

export interface IBlogSupabase {
  id: string;
  title: string;
  slug: string;
  image_url: string;
  content?: string;
  is_published: boolean;
  is_premium: boolean;
  created_at: Date | string;
  updated_at: Date | string;
}
export interface IBlogCreate {
  title: string;
  image_url?: string;
  content?: string;
  is_published: boolean;
  is_premium: boolean;
}

export interface IBlog {
  id: string;
  title: string;
  updated_at: string;
  created_at: string;
  image_url: string;
  is_published: boolean;
  is_premium: boolean;
  slug: string;
  tags: ITag[];
  comments: Comment[];
}

interface Comment {
  id: string;
  created_at: string;
  updated_at: string;
  blog_id: string;
  user_id: string;
  content: string;
  like: number;
}
