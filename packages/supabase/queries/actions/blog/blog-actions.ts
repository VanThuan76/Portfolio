import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@repo/supabase/utils/types";

import { IBlog, ICreateBlog } from "@repo/supabase/queries/types/blog";
import {
    createResponse,
    IBaseResponse,
} from "@repo/supabase/queries/types/base";

export const createBlog = async (
    supabase: SupabaseClient<Database>,
    body: ICreateBlog,
): Promise<IBaseResponse<any>> => {
    const { data: blogData, error: blogError } = await supabase
        .from("blog")
        .insert([
            {
                created_by: body.created_by,
                image_url: body.image_url || "",
                is_published: false,
                is_premium: false,
            },
        ])
        .select("id")
        .single();

    if (blogError || !blogData) {
        return {
            status: 500,
            message: blogError.message ?? "Failed to create blog",
            data: null,
        };
    }

    const blogId = blogData.id;

    const translations = Object.entries(body.contents).map(
        ([languageCode, content]) => ({
            blog_id: blogId,
            category_id: content?.category_id || "",
            language_code: languageCode,
            title: content?.title || "",
            content: JSON.stringify(content?.content || [])
        }),
    );

    const { error: translationError } = await supabase
        .from("blog_translation")
        .insert(translations);

    if (translationError) {
        return {
            status: 500,
            message: translationError.message ?? "Failed to create blog translations",
            data: null,
        };
    }

    const tags = Object.values(body.contents)
        .flatMap((content) => content.tags || [])
        .map((tag) => ({
            blog_id: blogId,
            name: tag,
        }));

    const { error: tagError } = await supabase.from("blog_tag").insert(tags);

    if (tagError) {
        return {
            status: 500,
            message: tagError.message ?? "Failed to create blog tags",
            data: null,
        };
    }

    return {
        status: 201,
        message: "Blog, translations, and tags created successfully",
        data: null,
    };
};

export const getBlogs = async (
    supabase: SupabaseClient<Database>,
    locale: string,
): Promise<IBaseResponse<IBlog[] | []>> => {
    try {
        const [
            blogsResult,
            blogTranslationsResult,
            blogTagsResult,
            blogCommentsResult,
            blogReactionsResult,
        ] = await Promise.all([
            supabase
                .from("blog")
                .select(
                    `
                        *,
                        users!blog_created_by_fkey(id, user_metadata, email, bio, location, is_verified, last_sign_in_at, created_at, updated_at)
                    `,
                )
                .eq("is_published", true),

            supabase.from("blog_translation").select("*"),

            supabase.from("blog_tag").select("*"),

            supabase.from("blog_comment").select("*"),

            supabase.from("blog_reaction").select("*"),
        ]);

        if (blogsResult.error)
            return createResponse(500, [], "Failed to fetch blogs");
        if (blogTranslationsResult.error)
            return createResponse(500, [], "Failed to fetch blog translations");
        if (blogTagsResult.error)
            return createResponse(500, [], "Failed to fetch blog tags");
        if (blogCommentsResult.error)
            return createResponse(500, [], "Failed to fetch blog comments");
        if (blogReactionsResult.error)
            return createResponse(500, [], "Failed to fetch blog reactions");

        const blogs = blogsResult.data;
        const blogTranslations = blogTranslationsResult.data;
        const blogTagsData = blogTagsResult.data;
        const blogCommentsData = blogCommentsResult.data;
        const blogReactionsData = blogReactionsResult.data;

        const combinedBlogs = blogs.map((blog) => {
            const getNestedInteractions = (commentId) => {
                const children = blogCommentsData.filter(
                    (item) => item.parent_id === commentId && item.blog_id === blog.id,
                );
                return children.map((interaction) => ({
                    ...interaction,
                    interactions: getNestedInteractions(interaction.id),
                }));
            };

            const tags = blogTagsData.filter((tag) => tag.blog_id === blog.id);
            const comments = blogCommentsData
                .filter((item) => item.blog_id === blog.id)
                .map((comment) => ({
                    users: {},
                    ...comment,
                    interactions: getNestedInteractions(comment.id),
                }))
                .filter((comment) => !comment.parent_id);
            const reactions = blogReactionsData.filter(
                (reaction) => reaction.blog_id === blog.id,
            );
            const translation = blogTranslations.find(
                (trans) =>
                    trans.blog_id === blog.id && trans.language_code === locale,
            );
            const translations = blogTranslations
                .filter((trans) => trans.blog_id === blog.id)
                .map((trans) => ({
                    language_code: trans.language_code,
                    slug: trans.slug,
                }));

            return {
                ...blog,
                tags,
                reactions,
                comments,
                translations,
                total_comment: comments.length,
                content: translation?.content ?? null,
                title: translation?.title ?? null,
                category_id: translation?.category_id ?? null,
                language_code: translation?.language_code ?? null,
                slug: translation?.slug ?? null,
            };
        });

        return createResponse(
            200,
            combinedBlogs || [],
            "Successfully fetched blogs",
        );
    } catch (error) {
        console.error("Error fetching blog data:", error);
        return createResponse(500, [], "An unexpected error occurred");
    }
}

export const getBlogBySlug = async (
    supabase: SupabaseClient<Database>,
    slug: string,
    locale: string,
): Promise<IBaseResponse<IBlog | null>> => {
    const [blogTranslationRes, translationsRes] = await Promise.all([
        supabase
            .from("blog_translation")
            .select("*")
            .eq("slug", slug)
            .eq("language_code", locale)
            .single(),
        supabase.from("blog_translation").select("*"),
    ]);

    const blogTranslation = blogTranslationRes.data;

    if (blogTranslationRes.error || !blogTranslation)
        return createResponse(404, null, "Blog not found");

    const [blogRes, blogTagsRes, blogCommentsRes, blogReactionsRes] =
        await Promise.all([
            supabase
                .from("blog")
                .select(
                    `
                    *,
                    users!blog_created_by_fkey(
                        id, user_metadata, email, bio, location, is_verified, last_sign_in_at, created_at, updated_at
                    )
                    `,
                )
                .eq("id", blogTranslation.blog_id!)
                .eq("is_published", true)
                .single(),
            supabase
                .from("blog_tag")
                .select("*")
                .eq("blog_id", blogTranslation.blog_id!),
            supabase
                .from("blog_comment")
                .select(
                    `
                    *,
                    users!comment_user_id_fkey(
                        id, user_metadata, email, bio, location, is_verified, last_sign_in_at, created_at, updated_at
                    )
                    `,
                )
                .eq("blog_id", blogTranslation.blog_id!)
                .order("created_at", { ascending: false }),
            supabase
                .from("blog_reaction")
                .select("*")
                .eq("blog_id", blogTranslation.blog_id!),
        ]);

    const blog = blogRes.data;
    const translations =
        translationsRes.data
            ?.filter((translation) => translation.blog_id === blog?.id)
            .map((translation) => ({
                language_code: translation.language_code,
                slug: translation.slug,
            })) || [];

    if (blogRes.error || !blog)
        return createResponse(404, null, "Blog not found");

    const blogCommentsData = blogCommentsRes.data || [];
    const getNestedInteractions = (commentId) => {
        const children = blogCommentsData.filter(
            (interaction) => interaction.parent_id === commentId,
        );
        return children.map((interaction) => ({
            ...interaction,
            interactions: getNestedInteractions(interaction.id),
        }));
    };

    const commentsWithInteractions = blogCommentsData
        .map((comment) => ({
            ...comment,
            interactions: getNestedInteractions(comment.id),
        }))
        .filter((comment) => !comment.parent_id);

    const { id, created_at, updated_at, blog_id, ...filteredTranslation } =
        blogTranslationRes.data || {};
    const combinedBlog = {
        ...blog,
        ...filteredTranslation,
        translations,
        comments: commentsWithInteractions,
        tags: blogTagsRes.data || [],
        reactions: blogReactionsRes.data || [],
        total_comment: blogCommentsData.length,
    };

    return createResponse(200, combinedBlog, "Successfully fetched blog");
}

export const getBlogCategories = async (
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
}
