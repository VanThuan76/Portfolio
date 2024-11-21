export interface ICreateReaction {
  user_id: string;
  blog_id: string;
  reaction_type: string;
}
export interface ISaveReaction {
  user_id: string;
  blog_id: string;
  is_saved: boolean;
}
