import { cache } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@shared/utils/supabase/types";

import { IBaseResponse } from "@shared/query/types/base";
import { createResponse } from "@shared/query/index";

export const getInformations = cache(
  async (
    supabase: SupabaseClient<Database>,
    locale: string,
  ): Promise<
    IBaseResponse<Database["public"]["Tables"]["information"]["Row"][] | []>
  > => {
    const { data, error } = await supabase
      .from("information")
      .select("*")
      .eq("language_code", locale)
      .order("order", { ascending: true });

    if (error) return createResponse(500, [], "Failed to fetch information");

    return createResponse(200, data || [], "Successfully fetched information");
  },
);
