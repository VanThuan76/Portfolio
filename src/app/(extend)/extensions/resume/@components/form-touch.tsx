"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resumeCreateSchema } from "@/server/data/validations/resume";
import { Button } from "@/components/plate-ui/button";
import { Form } from "@/components/ui/form";
import InputText from "@/components/custom/form/input-text";
import InputTextArea from "@/components/custom/form/input-text-area";

const FormTouch = () => {
  const form = useForm<z.infer<typeof resumeCreateSchema>>({
    resolver: zodResolver(resumeCreateSchema),
    defaultValues: {},
  });

  function onSubmit() {
    console.log("HI");
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onError={(e) => {
          new Error(`Error ${e}`);
        }}
        className="w-full h-full flex flex-col px-2 gap-2 md:gap-5"
      >
        <InputText
          form={form}
          fieldName="name"
          placeHolder="Your name"
          className="min-h-[50px]"
        />
        <InputText
          form={form}
          fieldName="email"
          placeHolder="Your email"
          className="min-h-[50px]"
        />
        <InputText
          form={form}
          fieldName="phone"
          placeHolder="Your phone"
          className="min-h-[50px]"
        />
        <InputTextArea
          form={form}
          fieldName="message"
          placeHolder="Your message"
          className="min-h-[150px]"
        />
        <Button type="submit">Send</Button>
      </form>
    </Form>
  );
};

export default FormTouch;
