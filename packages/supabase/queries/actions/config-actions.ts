import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@repo/supabase/utils/types";

import {
    IBaseResponse,
    createResponse,
} from "@repo/supabase/queries/types/base";

export const getTags = async (
    supabase: SupabaseClient<Database>,
): Promise<
    IBaseResponse<Database["public"]["Tables"]["config"]["Row"][] | []>
> => {
    const { data, error } = await supabase
        .from("config")
        .select("*")
        .eq("group", "website")
        .eq("type", "tag");

    if (error) return createResponse(500, [], "Failed to fetch tags");
    return createResponse(200, data || [], "Successfully fetched tags");
}

export const getLanguages =
    async (
        supabase: any,
    ): Promise<
        IBaseResponse<Database["public"]["Tables"]["config"]["Row"][] | []>
    > => {
        const { data, error } = await supabase
            .from("config")
            .select("*")
            .eq("group", "core")
            .eq("type", "language");

        if (error) return createResponse(500, [], "Failed to fetch languages");
        return createResponse(200, data || [], "Successfully fetched languages");
    }
