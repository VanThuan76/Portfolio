import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@repo/supabase/utils/types";

import {
  IBaseResponse,
  createResponse,
} from "@repo/supabase/queries/types/base";

export const getInformations = async (
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
}
