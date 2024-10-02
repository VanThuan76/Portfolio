import { supabaseBrowser } from "@shared/lib/supabase/browser";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { blog_id: string } },
): Promise<NextResponse> {
  const supabase = supabaseBrowser();
  const blogId = params.blog_id;

  const { data, error } = await supabase
    .from("blog_content")
    .select("content")
    .eq("blog_id", blogId)
    .single();

  if (error) {
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

  return NextResponse.json(
    {
      status: 200,
      data: data,
      message: "Successfully fetched blog content",
    },
    {
      status: 200,
    },
  );
}
