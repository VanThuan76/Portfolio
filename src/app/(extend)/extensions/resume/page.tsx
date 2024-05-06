"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { resumeCreateSchema } from "@/server/data/validations/resume";
import { Separator } from "@/components/plate-ui/separator";
import { TypographyH3 } from "@/components/ui/typography-h3";
import { Button } from "@/components/plate-ui/button";
import InputText from "@/components/custom/form/input-text";
import InputTextArea from "@/components/custom/form/input-text-area";

export default function Page() {
  const form = useForm<z.infer<typeof resumeCreateSchema>>({
    resolver: zodResolver(resumeCreateSchema),
    defaultValues: {},
  });

  function onSubmit() {
    console.log("HI");
  }
  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-3 justify-center items-center p-4 gap-12">
      <div className="w-full h-screen flex flex-wrap justify-start items-start gap-12 overflow-hidden">
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="large"
          data-theme="light"
          data-type="HORIZONTAL"
          data-vanity="vu-van-thuan-002839224"
          data-version="v1"
        />
        <Separator className="w-full" />
        <TypographyH3 title="GET IN TOUCH" />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            onError={(e) => {
              new Error(`Error ${e}`);
            }}
            className="w-full h-full flex flex-col px-2 gap-5"
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
      </div>
      <div className="w-full h-screen col-span-1 md:col-span-2 overflow-hidden rounded-md">
        <iframe
          className="h-[95%] !z-10"
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDNtrwINE&#x2F;4vGz5myNp5aCd0AQstZ7Ow&#x2F;view?embed"
          frameBorder="0"
          allowFullScreen
          allow="fullscreen"
          style={{
            overflow: "hidden",
            overflowX: "hidden",
            overflowY: "hidden",
            width: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        ></iframe>
      </div>
    </div>
  );
}
