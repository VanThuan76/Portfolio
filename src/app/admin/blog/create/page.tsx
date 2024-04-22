"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { PlateEditor } from "@/components/plate-ui";
import { Form } from "@/components/ui/form";
import { initialValueByCreatingBlog } from "@/constant";
import { blogCreateSchema } from "@/server/data/validations/blog";
import { IBlogCreate } from "@/server/data/types/blog";
import InputText from "@/components/custom/form/input-text";
import InputFile from "@/components/custom/form/input-file";
import InputCheckBox from "@/components/custom/form/input-checkbox";
import { Button } from "@/components/ui/button";

export default async function Page() {
  const form = useForm<z.infer<typeof blogCreateSchema>>({
    resolver: zodResolver(blogCreateSchema),
    defaultValues: {},
  });
  const handleSubmit: SubmitHandler<IBlogCreate> = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        onError={(e) => {
          new Error(`Error ${e}`);
        }}
        className="relative w-full flex flex-col gap-5 min-h-[500px]"
      >
        <InputText form={form} fieldName="title" placeHolder="Title Blog" />
        <InputFile
          form={form}
          fileName="Image Blog"
          handleFileChange={() => {}}
          fieldName="image_url"
          className="w-full p-4 border rounded-md"
        />
        <div className="w-full flex gap-3 flex-wrap justify-start items-center">
          <InputCheckBox form={form} label="Publish" fieldName="is_published" />
          <InputCheckBox form={form} label="Premium" fieldName="is_premium" />
        </div>
        <PlateEditor initialValue={initialValueByCreatingBlog} />
        <Button type="submit">Create</Button>
      </form>
    </Form>
  );
}
