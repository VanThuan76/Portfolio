"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";

const AuthPage = () => {
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
  useEffect(() => {
    handleLoginWithGithub();
  }, []);
  return null;
};

export default AuthPage;
