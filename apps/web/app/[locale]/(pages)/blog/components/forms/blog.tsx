"use client";

import { z } from "zod";
import { X } from "lucide-react";
import { cn } from "@repo/design-system/utils/tw";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, m } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useUser, useSticky, useBeforeUnload } from "@repo/hooks";
import { useSupabaseBrowser } from "@repo/supabase/utils/client";
import {
  ICreateBlog,
  ILanguageContent,
  createBlog,
  getBlogCategories,
  getTags,
  uploadImageToStorage,
} from "@repo/supabase/queries";

import InputText from "@repo/design-system/components/molecules/forms/input-text";
import InputSelect from "@repo/design-system/components/molecules/forms/input-select";
import InputFile from "@repo/design-system/components/molecules/forms/input-file";
import InputMultiSelect from "@repo/design-system/components/molecules/forms/input-select-multiple";
import PlateEditor from "@repo/editor/index";

import { DEFAULT_VALUES } from "@shared/constants/pages/blog";
import { LANGUAGE_CODES } from "@shared/constants";
import { generateSlug } from "@shared/helpers/generate-slug";
import { calculateWordCount } from "@shared/helpers/calculate";

import { Button } from "@repo/design-system/components/atoms/button";
import { LoaderImage } from "@repo/design-system/components/molecules/ui-elements/loader-image";
import { Form } from "@repo/design-system/components/organisms/forms/form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@repo/design-system/components/organisms/forms/form";
import {
  TabsBtn,
  TabsContent,
  TabsProvider,
} from "@repo/design-system/components/molecules/tabs/tabs-animated";

const BlogForm = () => {
  const user = useUser();
  const locale = useLocale();
  const tLang = useTranslations("languages");
  const tForm = useTranslations("form");
  const tBlog = useTranslations("pages.blog");
  const element = useRef<HTMLDivElement>(null);
  const supabase = useSupabaseBrowser();
  const [isSticky] = useSticky(element, { nav: 0 });

  const [charCount, setCharCount] = useState<number>(0);
  const [optionTags, setOptionTags] = useState<{ value: any; label: any }[]>(
    [],
  );
  const [optionCategories, setOptionCategories] = useState<
    { value: any; label: any }[]
  >([]);
  const [imageLocal, setImageLocal] = useState<string | null>("");
  const [fileImage, setFileImage] = useState();

  const createBlogSchema = (tForm) => {
    const languageSchema = z
      .object({
        title: z
          .string({ required_error: tForm("required") })
          .min(1, { message: tForm("required") }),
        category_id: z
          .number({ required_error: tForm("required") })
          .refine((val) => val != null, { message: tForm("required") }),
        tags: z
          .array(z.string(), { required_error: tForm("required") })
          .nonempty({ message: tForm("required") }),
        content: z
          .array(z.any(), { required_error: tForm("required") })
          .nonempty({ message: tForm("required") }),
      })
      .refine(
        (data) => {
          const hasAnyFieldFilled =
            data.title ||
            data.category_id ||
            data.tags?.length ||
            data.content?.length;
          if (!hasAnyFieldFilled) return true;
          return (
            data.title &&
            data.category_id &&
            data.tags?.length &&
            data.content?.length
          );
        },
        { message: tForm("required") },
      );

    const dynamicFieldSchema = z.record(languageSchema);

    return z.object({
      image_url: z.string().optional(),
      contents: dynamicFieldSchema,
    });
  };

  const blogCreateSchema = createBlogSchema(tForm);

  const form = useForm<z.infer<typeof blogCreateSchema>>({
    resolver: zodResolver(blogCreateSchema),
    defaultValues: {},
  });

  const handleFileChange = async (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Image = reader.result as string;
        setImageLocal(base64Image);
      };

      setFileImage(file);
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveFile = () => {
    setImageLocal(null);
  };

  const onSubmit: SubmitHandler<
    Omit<ICreateBlog, "created_by" | "image_url">
  > = async (data) => {
    try {
      if (!user || !user.data) return;

      const validatedData = blogCreateSchema.parse({
        image_url: imageLocal,
        contents: LANGUAGE_CODES.reduce(
          (acc, code) => {
            const languageData = data.contents?.[code];
            if (
              languageData &&
              (languageData.title ||
                languageData.content ||
                languageData.tags?.length)
            ) {
              const languageSlug = generateSlug(languageData?.title ?? "");
              acc[code] = {
                category_id: languageData?.category_id,
                title: languageData?.title ?? "",
                tags: languageData?.tags ?? [],
                content: languageData?.content ?? [],
                slug: languageSlug,
              } as ILanguageContent;
            }
            return acc;
          },
          {} as Record<string, ILanguageContent>,
        ),
      });

      let imageServer = "";
      if (imageLocal) {
        const uploadedImage = await uploadImageToStorage(fileImage);
        if (!uploadedImage) throw new Error("Failed to upload image.");
        imageServer = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${uploadedImage.path}`;
      }

      const body = {
        created_by: user.data.id,
        ...validatedData,
        image_url: imageServer ?? "",
      };

      await createBlog(supabase, body);
    } catch (error) {
      console.error("Validation Errors:", error);
    }
  };

  const onError = (errors) => {
    console.log("Validation errors:", errors);
  };

  useEffect(() => {
    const fetchOptionsData = async () => {
      const responseTags = await getTags(supabase);
      const responseCategories = await getBlogCategories(supabase, locale);
      if (responseTags.status === 200)
        setOptionTags(
          responseTags.data.map((tag) => ({ value: tag.id, label: tag.value })),
        );
      if (responseCategories.status === 200)
        setOptionCategories(
          responseCategories.data.map((category) => ({
            value: category.id,
            label: category.name,
          })),
        );
    };
    fetchOptionsData();
  }, []);

  useBeforeUnload(true, "You have unsaved changes, are you sure?");

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onError={onError}
        className="relative flex flex-col items-start justify-start w-full gap-3"
      >
        <InputFile
          form={form}
          fileName={tBlog("add_cover_image")}
          handleFileChange={handleFileChange}
          fieldName="image_url"
          className="p-2 border rounded-md border-slate-300"
        />
        {imageLocal && (
          <div className="relative w-full h-[200px] md:h-[250px]">
            <LoaderImage
              isLoader={false}
              src={imageLocal}
              alt="Image_Blog"
              width={355}
              height={355}
              className="z-10 object-contain w-full h-full rounded-md"
            />
            <X
              onClick={handleRemoveFile}
              className="absolute top-0 right-1/4 w-[20px] h-[20px] z-20 text-red-400 cursor-pointer"
            />
          </div>
        )}
        <div ref={element} className="w-1 h-1"></div>
        <TabsProvider defaultValue={locale}>
          <AnimatePresence mode="wait">
            <m.div
              layout
              className={cn(
                "z-40 mt-2 flex items-center gap-2 max-w-xl overflow-x-auto",
                isSticky ? "sticky top-10 left-0" : "",
              )}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="max-w-md overflow-x-auto">
                <m.div
                  className="flex items-start p-1 bg-gray-200 border rounded-md w-fit"
                  animate={{ flexDirection: isSticky ? "column" : "row" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {[...new Set([locale, ...LANGUAGE_CODES])].map((code) => (
                    <TabsBtn key={code} value={code}>
                      <span className="relative z-[2] text-sm">
                        {tLang(`${code}`)}
                      </span>
                    </TabsBtn>
                  ))}
                </m.div>
                {isSticky && (
                  <m.div
                    className="flex items-center justify-center w-full p-1 mt-5 bg-gray-200 border rounded-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <m.p className="text-center">
                      {charCount} {tBlog("words")}
                    </m.p>
                  </m.div>
                )}
              </div>
              {!isSticky && (
                <span className="text-xs list-disc">
                  ⚫️ {tLang("languages")}
                </span>
              )}
            </m.div>
          </AnimatePresence>
          {LANGUAGE_CODES.map((code) => (
            <TabsContent key={code} value={code}>
              <InputText
                form={form}
                fieldName={`contents.${code}.title`}
                placeHolder={tBlog("title_blog")}
              />
              <InputSelect
                form={form}
                fieldName={`contents.${code}.category_id`}
                placeHolder={tBlog("category")}
                options={optionCategories}
              />
              <InputMultiSelect
                form={form}
                options={optionTags}
                fieldName={`contents.${code}.tags`}
                placeHolder={tBlog("tags")}
                className="relative z-40"
              />
              <FormField
                control={form?.control}
                name={`contents.${code}.content`}
                render={({ field }) => (
                  <FormItem className="max-w-[calc(100vw-32px)] sm:max-w-[min(calc(100vw-64px),1336px)]">
                    <FormControl>
                      <PlateEditor
                        {...field}
                        onChange={(editor) => {
                          field.onChange(editor.value);
                          setCharCount(calculateWordCount(editor.value));
                        }}
                        value={
                          field.value ||
                          DEFAULT_VALUES.find(
                            (item) => item.language_code === locale,
                          )?.content ||
                          ""
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </TabsContent>
          ))}
        </TabsProvider>
        <Button type="submit" className="sticky right-0 z-50 bottom-5">
          {tBlog("publish")}
        </Button>
      </form>
    </Form>
  );
};

export default BlogForm;
