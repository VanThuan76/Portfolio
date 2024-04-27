import * as z from "zod";

export const blogCreateSchema = z.object({
  title: z.string(),
  tags: z.array(z.string()),
  is_published: z.boolean(),
  is_premium: z.boolean(),
});
