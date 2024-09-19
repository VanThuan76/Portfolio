import { supabaseBrowser } from "@shared/lib/supabase/browser";

export async function GET(): Promise<Response> {
  const supabase = supabaseBrowser();
  const { data, error } = await supabase
    .from("tag")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    return new Response(
      JSON.stringify({
        status: 500,
        message: "Failed to fetch tags",
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
      message: "Successfully fetched tags",
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
}
