"use client";
import { z } from "zod";
import { useCallback, useEffect, useState, useTransition } from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { PlateEditor } from "@/components/plate-ui";
import { Form } from "@/components/ui/form";
import { blogCreateSchema } from "@/server/data/validations/blog";
import { initialValueByCreatingBlog } from "@/constant";
import { IBlogCreate } from "@/server/data/types/blog";
import { uploadImageToStorage } from "@/server/actions/upload-image";
import { Button } from "@/components/ui/button";
import { LoaderImage } from "@/components/custom/loader-image";
import { cn } from "@/lib/tw";
import { readTag } from "@/server/actions/tag";
import InputText from "@/components/custom/form/input-text";
import InputFile from "@/components/custom/form/input-file";
import InputCheckBox from "@/components/custom/form/input-checkbox";
import generateSlug from "@/utils/helpers/generate-slug";
import InputMultiSelect from "@/components/custom/form/input-select-multiple";

interface Props {
  handleSubmit: SubmitHandler<IBlogCreate>;
  form: UseFormReturn<any>;
}
const BlogForm = ({ form, handleSubmit }: Props) => {
  const [optionTags, setOptionTags] = useState<{ value: any; label: any }[]>(
    [],
  );
  const [imageCurr, setImageCurr] = useState<string | null>(null);
  const [contentCurr, setContentCurr] = useState<string>("");
  const handleChangeContent = useCallback((value: any) => {
    setContentCurr(value);
  }, []);
  const [isPending, startTransition] = useTransition();
  const handleFileChange = async (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = await uploadImageToStorage(file);
      const result = `https://ocjaxgkaarttotpzrodh.supabase.co/storage/v1/object/public/images/${imageUrl?.path}`;
      setImageCurr(result);
      return result;
    }
  };
  const onSubmit = (data: z.infer<typeof blogCreateSchema>) => {
    startTransition(() => {
      const body = {
        tags: data.tags,
        title: data.title,
        slug: generateSlug(data.title),
        image_url: imageCurr as string,
        content:
          contentCurr === ""
            ? JSON.stringify(initialValueByCreatingBlog)
            : JSON.stringify(contentCurr),
        is_published: data.is_published,
        is_premium: data.is_premium,
      };
      handleSubmit(body);
    });
  };
  useEffect(() => {
    const getTag = async () => {
      const { data: tags } = await readTag();
      if (tags) {
        setOptionTags(tags.map((tag) => ({ value: tag.id, label: tag.title })));
      }
    };
    getTag();
  }, []);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onError={(e) => {
          new Error(`Error ${e}`);
        }}
        className="relative w-full flex flex-col justify-center items-center gap-5 min-h-[500px]"
      >
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-3">
            <InputCheckBox
              form={form}
              label="Publish"
              fieldName="is_published"
            />
            <InputCheckBox form={form} label="Premium" fieldName="is_premium" />
          </div>
          <Button type="submit" className={cn({ "animate-spin": isPending })}>
            Create
          </Button>
        </div>
        <InputText form={form} fieldName="title" placeHolder="Title Blog" />
        <InputMultiSelect
          form={form}
          options={optionTags}
          fieldName="tags"
          placeHolder="Select blog's tag"
        />
        <InputFile
          form={form}
          fileName="Image Blog"
          handleFileChange={handleFileChange}
          fieldName="image_url"
          className="p-2 border rounded-md border-dashed"
        />
        {imageCurr && (
          <div className="w-full h-auto">
            <LoaderImage
              isLoader={false}
              src={imageCurr}
              alt="Image_Blog"
              className="w-full h-full object-cover rounded-md object-center"
              width={355}
              height={355}
            />
          </div>
        )}
        <PlateEditor
          handleChangeContent={handleChangeContent}
          initialValue={initialValueByCreatingBlog}
        />
      </form>
    </Form>
  );
};

export default BlogForm;
