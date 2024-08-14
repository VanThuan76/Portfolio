import * as z from "zod";

export const chatBotSchemaSend = z.object({
  query: z.string(),
});
