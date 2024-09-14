"use server";

import { supabaseBrowser } from "@shared/lib/supabase/browser";

const supabase = supabaseBrowser();
export async function getProject() {
    const projects = await supabase.from("project").select("*");
    return projects.data;
}
