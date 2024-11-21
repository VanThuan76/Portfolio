"use client";

import { Button } from "@repo/design-system/components/atoms/button";
import { getSupabaseBrowserClient } from "@repo/supabase/utils/client";

import GithubIcon from "./icons/github-icon";
import GoogleIcon from "./icons/google-icon";

export default function Social({ redirectTo }: { redirectTo: string }) {
  const loginWithProvider = async (provider: "github" | "google") => {
    const supabase = getSupabaseBrowserClient();

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo:
          window.location.origin + `/auth/callback?next=` + redirectTo,
      },
    });

    if (error) {
      console.error("Error during OAuth login:", error.message);
      return;
    }

    const { data: session, error: sessionError } =
      await supabase.auth.getSession();

    if (sessionError) {
      console.error("Error getting session:", sessionError.message);
      return;
    }

    if (!session) {
      console.error("No active session found");
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const userMetadata = {
      ...session.session?.user.user_metadata,
      provider: provider,
    };

    const userId = session.session?.user?.identities![0]?.user_id ?? user?.id;

    if (!userId) {
      console.error("User ID not found in session identities");
      return;
    }

    const { data, error: updateError } = await supabase
      .from("users")
      .update({
        user_metadata: JSON.stringify(userMetadata),
      })
      .eq("id", userId);

    if (updateError) {
      console.error("Error updating user metadata:", updateError.message);
    } else {
      console.log("User metadata updated successfully:", data);
    }
  };

  return (
    <div className="flex w-full gap-2">
      <Button
        className="flex items-center w-full h-8 gap-5"
        variant="outline"
        onClick={() => loginWithProvider("github")}
      >
        <GithubIcon className="w-[24px] h-[24px]" />
        Github
      </Button>
      <Button
        className="flex items-center w-full h-8 gap-2"
        variant="outline"
        onClick={() => loginWithProvider("google")}
      >
        <GoogleIcon className="w-[24px] h-[24px]" />
        Google
      </Button>
    </div>
  );
}
