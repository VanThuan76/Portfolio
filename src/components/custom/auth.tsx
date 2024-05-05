"use client";
import React from "react";
import { redirect, useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { IAuthSupabase } from "@/server/data/types/supabase";
interface Props {
  user?: IAuthSupabase | undefined;
}
const Auth = ({ user }: Props) => {
  const router = useRouter();
  const handleLoginWithGithub = async () => {
    const supabase = supabaseBrowser();
    const origin = window.location.origin;
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    });
    if (error) {
      console.log(error);
    } else {
      return redirect(data.url);
    }
  };
  const handleLogout = async () => {
    const supabase = supabaseBrowser();
    await supabase.auth.signOut();
    router.refresh();
  };
  return (
    <React.Fragment>
      {user ? (
        <div onClick={handleLogout}>Logout</div>
      ) : (
        <div onClick={handleLoginWithGithub} className="cursor-pointer">
          Login
        </div>
      )}
    </React.Fragment>
  );
};

export default Auth;
