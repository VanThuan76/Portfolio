export interface IBlog {
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
