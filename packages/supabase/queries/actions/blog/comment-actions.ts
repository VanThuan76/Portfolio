import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@repo/supabase/utils/types";

import {
  ICreateComment,
  ILikeComment,
} from "@repo/supabase/queries/types/comment";
import { verifyRecaptcha } from "@repo/supabase/queries/actions/auth-actions";

export const createComment = async (
  supabase: SupabaseClient<Database>,
  body: ICreateComment,
  captchaToken: string,
): Promise<any> => {
  const isCaptchaValid = await verifyRecaptcha(captchaToken);
  if (!isCaptchaValid) {
    return {
      status: 403,
      message: "Failed reCAPTCHA verification or low score.",
    };
  }

  const { data, error } = await supabase
    .from("blog_comment")
    .insert([body])
    .select();

  if (error) {
    return {
      status: 500,
      message: `Failed to create comment in blog comment`,
    };
  }

  return {
    status: 201,
    message: `Comment created successfully in blog comment`,
    data,
  };
};

export const likeComment = async (
  supabase: SupabaseClient<Database>,
  body: ILikeComment,
  captchaToken: string,
): Promise<any> => {
  const isCaptchaValid = await verifyRecaptcha(captchaToken);
  if (!isCaptchaValid) {
    return {
      status: 403,
      message: "Failed reCAPTCHA verification or low score.",
    };
  }

  const query = supabase
    .from("blog_comment")
    .select("id, like")
    .eq("user_id", body.user_id)
    .eq("blog_id", body.blog_id);

  if (body.parent_id !== null) {
    query.eq("parent_id", body.parent_id);
  } else {
    query.is("parent_id", null);
  }

  const { data: comment, error: fetchError } = await query.single();

  if (fetchError) {
    return {
      status: 500,
      message: `Error fetching comment: ${fetchError.message}`,
    };
  }

  if (!comment) {
    return {
      status: 404,
      message: `Comment not found`,
    };
  }

  const newLikesCount = (comment.like ?? 0) + 1;

  const { data, error } = await supabase
    .from("blog_comment")
    .update({ like: newLikesCount })
    .eq("id", comment.id)
    .select();

  if (error) {
    return {
      status: 500,
      message: `Failed to like the comment: ${error.message}`,
    };
  }

  return {
    status: 200,
    message: `Comment liked successfully`,
    data,
  };
};
