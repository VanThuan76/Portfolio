"use server";

import { supabaseBrowser } from "@/lib/supabase/browser";

const supabase = supabaseBrowser();
export async function readProject() {
  const projects = await supabase
    .from("project")
    .select("*")
  return projects;
}
