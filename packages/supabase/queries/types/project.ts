import { Database } from "@repo/supabase/utils/types";

export type ProjectSupabase = Database["public"]["Tables"]["project"]["Row"];
export type ProjectImageSupabase =
  Database["public"]["Tables"]["project_image"]["Row"];
export type ProjectTagSupabase =
  Database["public"]["Tables"]["project_tag"]["Row"];

export interface IProject extends ProjectSupabase {
  tags: ProjectTagSupabase[];
  images: ProjectImageSupabase[];
}
