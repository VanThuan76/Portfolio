import { supabaseBrowser } from "@/lib/supabase/browser";

export async function GET(request: Request): Promise<Response> {
  const supabase = supabaseBrowser();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id === "*") {
    const result = await supabase.from("tag").select("id").limit(10);
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else if (id) {
    const tag = await supabase.from("tag").select("*").eq("id", id).single();
    return new Response(JSON.stringify(tag), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify({}), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
