"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { z } from "zod";
import { X } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations, useLocale } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";

import { getTodayFormatted } from "@/shared/helpers/get-time";
import { useUser, useBeforeUnload } from "@repo/hooks";
import { useSupabaseBrowser } from "@repo/supabase/utils/client";
import {
  ICreateBlog,
  ILanguageContent,
  createBlog,
  uploadImageToStorage,
} from "@repo/supabase/queries";

import InputFile from "@repo/design-system/components/molecules/forms/input-file";

import { LANGUAGE_CODES } from "@shared/constants";
import { generateSlug } from "@shared/helpers/generate-slug";

import { Form } from "@repo/design-system/components/organisms/forms/form";

import { createBlogSchema } from "./schemas/blog";

const LanguageTabsNewBlog = dynamic(() => import("../language-tabs-new-blog"), {
  ssr: false,
});

interface BlogFormProps {
  optionTags: { value: any; label: any }[];
  optionCategories: { value: any; label: any }[];
  currentLocaleForm: string;
  setCurrentLocaleForm: React.Dispatch<React.SetStateAction<string>>;
}

const BlogForm = ({
  optionTags,
  optionCategories,
  currentLocaleForm,
  setCurrentLocaleForm,
}: BlogFormProps) => {
  const user = useUser();
  const locale = useLocale();
  const tForm = useTranslations("form");
  const tBlog = useTranslations("pages.blog");
  const supabase = useSupabaseBrowser();

  const [imageLocal, setImageLocal] = useState<string | null>("");
  const [fileImage, setFileImage] = useState<File | null>();

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

  const onSubmit: SubmitHandler<Omit<ICreateBlog, "created_by">> = async (
    data,
  ) => {
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

      if (imageLocal && fileImage) {
        const uploadedImageUrl = await uploadImageToStorage(fileImage);
        if (!uploadedImageUrl) throw new Error("Failed to upload image.");
        imageServer = uploadedImageUrl;
      }

      if (imageServer === "") {
        toast.error("Chưa đăng ảnh", {
          description: getTodayFormatted(locale),
        });
      } else {
        const body = {
          created_by: user.data.id,
          ...validatedData,
          image_url: imageServer ?? "",
        };

        console.log(body);
        await createBlog(supabase, body);
        form.reset();
        toast(tBlog("notify_create_blog"), {
          description: getTodayFormatted(locale),
        });
      }
    } catch (error) {
      console.error("Validation Errors:", error);
    }
  };

  const onError = (errors) => {
    console.log("Validation errors:", errors);
  };

  useBeforeUnload(true, "You have unsaved changes, are you sure?");

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onError={onError}
        className="relative flex flex-col items-start justify-start w-full"
      >
        <InputFile
          form={form}
          fileName={tBlog("add_cover_image")}
          handleFileChange={handleFileChange}
          fieldName="image_url"
          className="p-2 mt-2 border rounded-md border-slate-300"
        />
        {imageLocal && (
          <div className="relative w-full h-[200px] md:h-[250px]">
            <Image
              priority
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
        <LanguageTabsNewBlog
          form={form}
          optionTags={optionTags}
          optionCategories={optionCategories}
          currentLocaleForm={currentLocaleForm}
          setCurrentLocaleForm={setCurrentLocaleForm}
        />
      </form>
    </Form>
  );
};

export default BlogForm;
