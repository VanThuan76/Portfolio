import * as z from "zod";

export const resumeCreateSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string().nullable(),
  message: z.string(),
});
