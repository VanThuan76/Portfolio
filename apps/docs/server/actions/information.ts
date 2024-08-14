import { supabaseBrowser } from "@shared/lib/supabase/browser";

const supabase = supabaseBrowser();

export async function readInformationTask() {
  try {
    const { data, error } = await supabase.from("infomation_work").select("*");

    if (error) {
      throw error;
    }

    return { data, error: null };
  } catch (error) {
    console.error("Error reading information task:", error);
    return { data: null, error };
  }
}
