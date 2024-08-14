import { redirect } from "next/navigation";
import { IAuthSupabase } from "@server/data/types/supabase";
import { supabaseServer } from "@shared/lib/supabase/server";

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
