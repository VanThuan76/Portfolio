import { supabaseBrowser } from "@shared/lib/supabase/browser";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
): Promise<NextResponse> {
  const supabase = supabaseBrowser();
  const slug = params.slug;

  // Fetch blog by slug
  const { data: blog, error: blogError } = await supabase
    .from("blog")
    .select("*")
    .eq("slug", slug)
    .single();

  if (blogError || !blog) {
    return NextResponse.json(
      {
        status: 500,
        message: "Failed to fetch blog by slug",
      },
      {
        status: 500,
      },
    );
  }

  // Fetch blog content
  const { data: blogContent, error: blogContentError } = await supabase
    .from("blog_content")
    .select("content")
    .eq("blog_id", blog.id)
    .single();

  if (blogContentError || !blogContent) {
    console.error("Error fetching blog content:", blogContentError);
    return NextResponse.json(
      {
        status: 500,
        message: "Failed to fetch blog content",
      },
      {
        status: 500,
      },
    );
  }

  // Fetch blog comments
  const { data: blogComment, error: blogCommentError } = await supabase
    .from("blog_comment")
    .select(
      `
         *,
         users:user_id (
           id,
           display_name,
           avatar_url
         )
       `,
    )
    .eq("blog_id", blog.id);

  if (blogCommentError) {
    console.error("Error fetching blog comments:", blogCommentError);
    return NextResponse.json(
      {
        status: 500,
        message: "Failed to fetch blog comments",
      },
      {
        status: 500,
      },
    );
  }

  return NextResponse.json(
    {
      status: 200,
      data: {
        blog: {
          ...blog,
          content: blogContent.content,
        },
        comments: blogComment || [],
      },
      message: "Successfully fetched blog by slug",
    },
    {
      status: 200,
    },
  );
}
