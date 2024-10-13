import { cache } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@shared/utils/supabase/types";

import { IBaseResponse } from "@shared/query/types/base";
import { IBlog } from "@shared/query/types/blog";
import { createResponse } from "@shared/query/index";

export const getBlogs = cache(
  async (
    supabase: SupabaseClient<Database>,
    locale: string,
  ): Promise<IBaseResponse<IBlog[] | []>> => {
    const { data: blogs, error: blogError } = await supabase
      .from("blog")
      .select(
        `
        *,
        blog_category!inner(name)
    `,
      )
      .eq("language_code", locale)
      .eq("is_published", true);

    if (blogError) return createResponse(500, [], "Failed to fetch blogs");

    const blogIds = blogs.map((blog) => blog.id);

    const { data: blogTagsData, error: blogTagsError } = await supabase
      .from("blog_tag")
      .select("*")
      .in("blog_id", blogIds);

    if (blogTagsError)
      return createResponse(500, [], "Failed to fetch blog tags");

    const { data: blogCommentsData, error: blogCommentsError } = await supabase
      .from("blog_comment")
      .select("*")
      .in("blog_id", blogIds);

    if (blogCommentsError)
      return createResponse(500, [], "Failed to fetch blog comments");

    const combinedBlogs = blogs.map((blog) => {
      const tags = blogTagsData.filter((tag) => tag.blog_id === blog.id);
      const comments = blogCommentsData.filter(
        (comment) => comment.blog_id === blog.id,
      );

      return {
        ...blog,
        blog_category: blog.blog_category.name,
        tags: tags,
        comments,
      };
    });

    return createResponse(
      200,
      combinedBlogs || [],
      "Successfully fetched blogs",
    );
  },
);

export const getBlogBySlug = cache(
  async (
    supabase: SupabaseClient<Database>,
    slug: string,
    locale: string,
  ): Promise<IBaseResponse<IBlog | null>> => {
    const { data: blog, error: blogError } = await supabase
      .from("blog")
      .select(
        `
            *,
            blog_category!inner(name)
        `,
      )
      .eq("slug", slug)
      .eq("language_code", locale)
      .eq("is_published", true)
      .single();

    if (blogError || !blog) return createResponse(404, null, "Blog not found");

    const { data: blogTagsData, error: blogTagsError } = await supabase
      .from("blog_tag")
      .select("*")
      .eq("blog_id", blog.id);

    if (blogTagsError)
      return createResponse(500, null, "Failed to fetch blog tags");

    const { data: blogCommentsData, error: blogCommentsError } = await supabase
      .from("blog_comment")
      .select("*")
      .eq("blog_id", blog.id);

    if (blogCommentsError)
      return createResponse(500, null, "Failed to fetch blog comments");

    const commentIds = blogCommentsData.map((comment) => comment.id);
    const { data: blogInteractCommentsData, error: blogInteractCommentsError } =
      await supabase
        .from("blog_interaction_comment")
        .select("*")
        .in("comment_id", commentIds);

    if (blogInteractCommentsError)
      return createResponse(
        500,
        null,
        "Failed to fetch blog interaction comments",
      );

    const commentsWithInteractions = blogCommentsData.map((comment) => ({
      ...comment,
      interactions:
        blogInteractCommentsData.filter(
          (interaction) => interaction.comment_id === comment.id,
        ) || [],
    }));

    const combinedBlog = {
      ...blog,
      blog_category: blog.blog_category.name,
      tags: blogTagsData || [],
      comments: commentsWithInteractions,
    };

    return createResponse(200, combinedBlog, "Successfully fetched blog");
  },
);

export const getBlogCategories = cache(
  async (
    supabase: SupabaseClient<Database>,
    locale: string,
  ): Promise<
    IBaseResponse<Database["public"]["Tables"]["blog_category"]["Row"][] | []>
  > => {
    const { data, error } = await supabase
      .from("blog_category")
      .select("*")
      .eq("language_code", locale);

    if (error) return createResponse(500, [], "Failed to fetch blog category");

    return createResponse(
      200,
      data || [],
      "Successfully fetched blog category",
    );
  },
);
