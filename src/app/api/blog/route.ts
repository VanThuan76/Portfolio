import { supabaseBrowser } from "@/lib/supabase/browser";

export async function GET(request: Request): Promise<Response> {
  const supabase = supabaseBrowser();
  const { searchParams } = new URL(request.url);

  const slug = searchParams.get("slug");

  if (slug === "*") {
    const result = await supabase.from("blog").select("slug").limit(10);
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else if (slug) {
    const blog = await supabase
      .from("blog")
      .select("*")
      .eq("slug", slug)
      .single();
    const blogContent = await supabase
      .from("blog_content")
      .select("*")
      .eq("blog_id", blog?.data!.id)
      .single();
    const result = {
      ...blog,
      data: {
        ...blog.data,
        content: blogContent?.data?.content,
      },
    };
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify({}), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
