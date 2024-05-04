export interface IProject {
  id: string;
  title: string;
  slug: string;
  image_url: string;
  description?: string;
  tech_stack: string;
  finished_date: string;
  created_at: Date | string;
  updated_at: Date | string;
}
