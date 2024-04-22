'use server'

import { Database } from "@/lib/supabase/types"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
const cookieStore = cookies()

const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
        cookies: {
            get(name: string) {
                return cookieStore.get(name)?.value
            }
        }
    }
)
export async function createBlog(data: any) {
    const { ["content"]: excludedKey, ...blog } = data
    const resultBlog = await supabase.from('blog').insert(blog).select('id').single()
    if (resultBlog.error) {
        return JSON.stringify(resultBlog)
    } else {
        const result = await supabase.from('blog_content').insert({ blog_id: resultBlog.data.id, content: data.content }).select('id').single()
        return JSON.stringify(result)
    }
}
