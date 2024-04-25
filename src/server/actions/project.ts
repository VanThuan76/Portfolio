"use server";

import { supabaseBrowser } from "@/lib/supabase/browser";

const supabase = supabaseBrowser();
export async function readProject() {
  const projects = await supabase
    .from("project")
    .select("*")
    .order("created_at", { ascending: true });
  return projects;
}
