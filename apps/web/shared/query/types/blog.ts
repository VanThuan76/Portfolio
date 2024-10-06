export interface IBlog {
  id: string;
  title: string;
  updated_at: string;
  created_at: string;
  image_url: string;
  is_published: boolean;
  is_premium: boolean;
  slug: string;
  category_id: number;
  tags: ITagBlog[];
  comments: IComment[];
}

export interface IComment {
  id: string;
  created_at: string;
  updated_at: string;
  blog_id: string;
  user_id: string;
  content: string;
  like: number;
}

export interface ITagBlog {
  id: string;
  title: string;
  slug: string;
  created_at: string;
  updated_at: string;
}

//Detail

export interface IArticle {
  blog: IArticleBlog;
  comments: IArticleComment[];
}

export interface IArticleComment {
  id: string;
  created_at: string;
  updated_at: string;
  blog_id: string;
  user_id: string;
  content: string;
  like: number;
  users: Users;
}

export interface Users {
  id: string;
  avatar_url: string;
  display_name: string;
}

export interface IArticleBlog {
  id: string;
  title: string;
  updated_at: string;
  created_at: string;
  image_url: string;
  is_published: boolean;
  is_premium: boolean;
  slug: string;
  category_id: number;
  content: string;
}
