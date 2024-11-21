"use client";

import { getSupabaseBrowserClient } from "@repo/supabase/utils/client";
import { User } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const supabase = getSupabaseBrowserClient();
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        return data.user;
      }
      return {} as User;
    },
  });
}
