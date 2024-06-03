import { supabaseBrowser } from "@/lib/supabase/browser";

const supabase = supabaseBrowser();
export function readInformationTask() {
  const informationTask = supabase.from("infomation_work").select("*");
  return informationTask;
}
