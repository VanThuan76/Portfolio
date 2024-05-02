import * as z from "zod";

export const commentSchema = z.object({
    user_id: z.string(),
    blog_id: z.string(),
    content: z.string(),
});
