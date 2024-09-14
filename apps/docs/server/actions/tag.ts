"use server";

import { supabaseBrowser } from "@shared/lib/supabase/browser";

const supabase = supabaseBrowser();

export async function getTag() {
  const { data, error } = await supabase
    .from("tag")
    .select("*")
    .order("created_at", { ascending: true });
  if (error) {
    throw error;
  }
  return data;
}
