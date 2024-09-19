import { supabaseBrowser } from "@shared/lib/supabase/browser";

export async function GET(): Promise<Response> {
    const supabase = supabaseBrowser();
    const { data, error } = await supabase.from("infomation_work").select("*");

    if (error) {
        return new Response(
            JSON.stringify({
                status: 500,
                message: "Failed to fetch information tasks",
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
            message: "Successfully fetched information tasks",
        }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" },
        },
    );
}
