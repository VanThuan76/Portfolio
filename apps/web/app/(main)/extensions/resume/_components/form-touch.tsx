"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@ui/atoms/button";
import { Form } from "@ui/organisms/forms/form";

import InputText from "@ui/molecules/forms/input-text";
import InputTextArea from "@ui/molecules/forms/input-text-area";

const FormTouch = () => {
  // const form = useForm<z.infer<typeof resumeCreateSchema>>({
  //     resolver: zodResolver(resumeCreateSchema),
  //     defaultValues: {},
  // });

  // function onSubmit() {
  //     console.log("HI");
  // }
  return (
    <></>
    // <Form {...form}>
    //     <form
    //         onSubmit={form.handleSubmit(onSubmit)}
    //         onError={(e) => {
    //             new Error(`Error ${e}`);
    //         }}
    //         className="flex flex-col w-full h-full gap-2 px-2 md:gap-5"
    //     >
    //         <InputText
    //             form={form}
    //             fieldName="name"
    //             placeHolder="Your name"
    //             className="min-h-[50px]"
    //         />
    //         <InputText
    //             form={form}
    //             fieldName="email"
    //             placeHolder="Your email"
    //             className="min-h-[50px]"
    //         />
    //         <InputText
    //             form={form}
    //             fieldName="phone"
    //             placeHolder="Your phone"
    //             className="min-h-[50px]"
    //         />
    //         <InputTextArea
    //             form={form}
    //             fieldName="message"
    //             placeHolder="Your message"
    //             className="min-h-[100px]"
    //         />
    //         <Button type="submit">Send</Button>
    //     </form>
    // </Form>
  );
};

export default FormTouch;
