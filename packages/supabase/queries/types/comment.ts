export interface ICreateComment {
  user_id: string;
  parent_id: string | null;
  blog_id: string;
  order: number;
  content: any;
}

export interface ILikeComment {
  user_id: string;
  parent_id: string | null;
  blog_id: string;
}
