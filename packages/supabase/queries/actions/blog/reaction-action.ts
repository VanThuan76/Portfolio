import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@repo/supabase/utils/types";

import {
  ICreateReaction,
  ISaveReaction,
} from "@repo/supabase/queries/types/reaction";
import { verifyRecaptcha } from "@repo/supabase/queries/actions/auth-actions";

export const createReaction = async (
  supabase: SupabaseClient<Database>,
  body: ICreateReaction,
  captchaToken: string,
): Promise<any> => {
  const isCaptchaValid = await verifyRecaptcha(captchaToken);
  if (!isCaptchaValid) {
    return {
      status: 403,
      message: "Failed reCAPTCHA verification or low score.",
    };
  }

  const { data: existingReaction, error: fetchError } = await supabase
    .from("blog_reaction")
    .select("*")
    .eq("user_id", body.user_id)
    .eq("blog_id", body.blog_id)
    .maybeSingle();

  if (fetchError) {
    return {
      status: 500,
      message: `Error fetching reaction record: ${fetchError.message}`,
    };
  }

  if (existingReaction) {
    const shouldUpdate = existingReaction.reaction_type !== body.reaction_type;

    if (shouldUpdate) {
      const { data, error } = await supabase
        .from("blog_reaction")
        .update({
          reaction_type: body.reaction_type,
        })
        .eq("user_id", body.user_id)
        .eq("blog_id", body.blog_id)
        .select();

      if (error) {
        return {
          status: 500,
          message: `Failed to update blog reaction: ${error.message}`,
        };
      }

      return {
        status: 200,
        message: `Blog reaction updated successfully`,
        data,
      };
    } else {
      return {
        status: 200,
        message: `No changes detected, skipping update`,
      };
    }
  } else {
    const { data, error } = await supabase
      .from("blog_reaction")
      .insert([body])
      .select();

    if (error) {
      return {
        status: 500,
        message: `Failed to create reaction in blog`,
      };
    }

    return {
      status: 201,
      message: `Reaction created successfully in blog`,
      data,
    };
  }
};

export const saveReaction = async (
  supabase: SupabaseClient<Database>,
  body: ISaveReaction,
): Promise<any> => {
  const { data: existingReaction, error: fetchError } = await supabase
    .from("blog_reaction")
    .select("*")
    .eq("user_id", body.user_id)
    .eq("blog_id", body.blog_id)
    .maybeSingle();

  if (fetchError) {
    return {
      status: 500,
      message: `Error fetching reaction record: ${fetchError.message}`,
    };
  }

  if (existingReaction) {
    const shouldUpdate = existingReaction.is_saved !== body.is_saved;

    if (shouldUpdate) {
      const { data, error } = await supabase
        .from("blog_reaction")
        .update({
          is_saved: body.is_saved,
        })
        .eq("user_id", body.user_id)
        .eq("blog_id", body.blog_id)
        .select();

      if (error) {
        return {
          status: 500,
          message: `Failed to update blog save reaction: ${error.message}`,
        };
      }

      return {
        status: 200,
        message: `Blog save reaction updated successfully`,
        data,
      };
    } else {
      return {
        status: 200,
        message: `No changes detected, skipping update`,
      };
    }
  } else {
    const { data, error } = await supabase
      .from("blog_reaction")
      .insert([body])
      .select();

    if (error) {
      return {
        status: 500,
        message: `Failed to save reaction in blog`,
      };
    }

    return {
      status: 201,
      message: `Reaction created successfully in blog`,
      data,
    };
  }
};
