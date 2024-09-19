import { supabaseBrowser } from "@shared/lib/supabase/browser";

export async function GET(): Promise<Response> {
  const supabase = supabaseBrowser();
  const { data, error } = await supabase.from("project").select("*");

  if (error) {
    return new Response(
      JSON.stringify({
        status: 500,
        message: "Failed to fetch projects",
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
      message: "Successfully fetched projects",
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
}
