import { z } from "zod";

export const createBlogSchema = (tForm: (key: string) => string) => {
  const languageSchema = z
    .object({
      title: z.string().min(1, { message: tForm("required") }),
      category_id: z
        .number()
        .refine((val) => val != null, { message: tForm("required") }),
      tags: z.array(z.string()).nonempty({ message: tForm("required") }),
      content: z.array(z.any()).nonempty({ message: tForm("required") }),
    })
    .refine(
      (data) => {
        const hasAnyFieldFilled =
          data.title ||
          data.category_id ||
          data.tags?.length ||
          data.content?.length;
        return hasAnyFieldFilled;
      },
      { message: tForm("required") },
    );

  const dynamicFieldSchema = z.record(languageSchema);

  return z.object({
    image_url: z.string().optional(),
    contents: dynamicFieldSchema,
  });
};
