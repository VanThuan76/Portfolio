import { supabaseBrowser } from "@shared/lib/supabase/browser";

export async function GET(): Promise<Response> {
  const supabase = supabaseBrowser();
  const { data, error } = await supabase
    .from("blog_category")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    return new Response(
      JSON.stringify({
        status: 500,
        message: "Failed to fetch blog category",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  return new Response(
    JSON.stringify({
      status: 200,
      data: data,
      message: "Successfully fetched blog category",
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
}
