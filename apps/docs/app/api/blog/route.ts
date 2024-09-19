import { supabaseBrowser } from "@shared/lib/supabase/browser";

export async function GET(): Promise<Response> {
    const supabase = supabaseBrowser();
    const { data: blogs, error } = await supabase
        .from("blog")
        .select("*")
        .eq("is_published", true);

    if (error) {
        return new Response(JSON.stringify({
            status: 500,
            message: "Failed to fetch blogs",
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const blogIds = blogs.map((blog) => blog.id);
    const { data: blogTagsData, error: tagsError } = await supabase
        .from("blog_tag")
        .select("*")
        .in("blog_id", blogIds);

    if (tagsError) {
        throw tagsError;
    }

    const tagIds = blogTagsData.map((tag) => tag.tag_id);
    const { data: tagsData, error: tagsDataError } = await supabase
        .from("tag")
        .select("*")
        .in("id", tagIds);

    if (tagsDataError) {
        throw tagsDataError;
    }

    const tagsById: Record<string, any> = {};
    tagsData.forEach((tag) => {
        tagsById[tag.id] = tag;
    });

    const blogsWithTags = blogs.map((blog) => {
        const blogTags = blogTagsData
            .filter((tag) => tag.blog_id === blog.id)
            .map((tag) => tagsById[tag.tag_id!]);
        return {
            ...blog,
            tags: blogTags || [],
        };
    });

    const { data: commentsData, error: commentsDataError } = await supabase
        .from("blog_comment")
        .select("*")
        .in("blog_id", blogIds);

    if (commentsDataError) {
        throw commentsDataError;
    }

    const commentsByBlogId: Record<string, any[]> = {};
    commentsData.forEach((comment) => {
        if (!commentsByBlogId[comment.blog_id]) {
            commentsByBlogId[comment.blog_id] = [];
        }
        commentsByBlogId[comment.blog_id]?.push(comment);
    });

    const blogsCurrent = blogsWithTags.map((blog) => {
        return {
            ...blog,
            comments: commentsByBlogId[blog.id] || [],
        };
    });

    return new Response(JSON.stringify({
        status: 200,
        data: blogsCurrent,
        message: "Successfully fetched blogs",
    }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
