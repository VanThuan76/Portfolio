"use server";

import { supabaseBrowser } from "@/lib/supabase/browser";

const supabase = supabaseBrowser();

export async function readTag() {
  const tags = await supabase
    .from("tag")
    .select("*")
    .order("created_at", { ascending: true });
  return tags;
}
