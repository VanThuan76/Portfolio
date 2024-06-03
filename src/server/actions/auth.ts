import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabase/server";
import { IAuthSupabase } from "@/server/data/types/supabase";

export const currentProfile = async () => {
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  // @ts-ignore
  const currentProfile: IAuthSupabase = user;
  return currentProfile;
};

export const authAdminServer = async () => {
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");
  // @ts-ignore
  const currentProfile: IAuthSupabase = user;
  return currentProfile;
};
