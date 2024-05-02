import { supabaseServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { IAuthSupabase } from "../data/types/supabase";

export const currentProfile = async () => {
    const supabase = await supabaseServer();
    const {
        data: { user },
    } = await supabase.auth.getUser();
    if (!user) redirect("/auth/login");
    // @ts-ignore
    const currentProfile: IAuthSupabase = user
    return currentProfile
}