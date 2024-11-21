"use client";

import Link from "next/link";
import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { cn } from "@repo/design-system/utils/tw";

import {
  postEmail,
  verifyOtp,
} from "@repo/supabase/queries/actions/auth-actions";
import { Button } from "@repo/design-system/components/atoms/button";
import { Form } from "@repo/design-system/components/organisms/forms/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@repo/design-system/components/molecules/forms/input-otp";
import InputText from "@repo/design-system/components/molecules/forms/input-text";
import InputPassword from "@repo/design-system/components/molecules/forms/input-password";

const FormSchema = z
  .object({
    email: z.string().email({ message: "Invalid Email Address" }),
    password: z.string().min(6, { message: "Password is too short" }),
    "confirm-pass": z.string().min(6, { message: "Password is too short" }),
  })
  .refine(
    (data) => {
      console.log(data);
      if (data["confirm-pass"] !== data.password) {
        console.log("running");
        return false;
      } else {
        return true;
      }
    },
    { message: "Password does't match", path: ["confirm-pass"] },
  );

export default function SignUp({ redirectTo }: { redirectTo: string }) {
  const t = useTranslations("pages.auth");
  const queryString =
    typeof window !== "undefined" ? window.location.search : "";
  const urlParams = new URLSearchParams(queryString);

  const verify = urlParams.get("verify");
  const existEmail = urlParams.get("email");

  const [isConfirmed, setIsConfirmed] = useState(verify === "true");
  const [verifyStatus, setVerifyStatus] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const [isSendAgain, startSendAgain] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      "confirm-pass": "",
    },
  });

  const sendVerifyEmail = async (data: z.infer<typeof FormSchema>) => {
    const json = await postEmail({
      email: data.email,
      password: data.password,
    });
    if (!json.error) {
      router.replace(
        (pathname || "/") + "?verify=true&email=" + form.getValues("email"),
      );
      setIsConfirmed(true);
    } else {
      if (json.error.code) {
        toast.error(json.error.code);
      } else if (json.error.message) {
        toast.error(json.error.message);
      }
    }
  };

  const inputOptClass = cn({
    " border-green-500": verifyStatus === "success",
    " border-red-500": verifyStatus === "failed",
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!isPending) {
      startTransition(async () => {
        await sendVerifyEmail(data);
      });
    }
  }

  return (
    <div
      className={cn(
        "whitespace-nowrap p-5 space-x-5 overflow-hidden  items-center align-top",
        isPending ? "animate-pulse" : "",
      )}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            `space-y-3 inline-block w-full transform transition-all`,
            {
              "-translate-x-[110%]": isConfirmed,
            },
          )}
        >
          <InputText
            form={form}
            label={t("email_address")}
            fieldName="email"
            placeHolder="example@gmail.com"
          />
          <InputPassword
            form={form}
            fieldName="password"
            label={t("password")}
          />
          <InputPassword
            form={form}
            fieldName="confirm-pass"
            label={t("confirm_password")}
          />
          <Button
            type="submit"
            className="flex items-center w-full h-8 gap-2 text-white transition-all bg-indigo-500 hover:bg-indigo-600"
          >
            <ChevronRight
              className={cn(!isPending ? "hidden" : "block animate-spin")}
            />
            {t("continue")}
            {/* <RiArrowRightSFill className=" size-4" /> */}
          </Button>
          <div className="text-sm text-center">
            <h1>
              {t("already_account")}{" "}
              <Link
                href={
                  redirectTo
                    ? `/auth/signin?next=` + redirectTo
                    : "/auth/signin"
                }
                className="text-blue-400"
              >
                {t("signin")}
              </Link>
            </h1>
          </div>
        </form>
      </Form>

      {/* verify email */}
      <div
        className={cn(
          `w-full inline-block h-80 text-wrap align-top  transform transition-all space-y-3`,
          isConfirmed ? "-translate-x-[105%]" : "translate-x-0",
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-5">
          <Mail className=" size-8" />

          <h1 className="text-2xl font-semibold text-center">Verify email</h1>

          <p className="text-sm text-center">
            {" A verification code has been sent to "}
            <span className="font-bold">
              {verify === "true" ? existEmail : form.getValues("email")}
            </span>
          </p>

          <InputOTP
            pattern={REGEXP_ONLY_DIGITS}
            id="input-otp"
            maxLength={6}
            onChange={async (value) => {
              if (value.length === 6) {
                document.getElementById("input-otp")?.blur();
                const res = await verifyOtp({
                  email: form.getValues("email"),
                  otp: value,
                  type: "email",
                });
                const { error } = JSON.parse(res);
                if (error) {
                  setVerifyStatus("failed");
                } else {
                  setVerifyStatus("success");
                  router.push(redirectTo);
                }
              }
            }}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} className={inputOptClass} />
              <InputOTPSlot index={1} className={inputOptClass} />
              <InputOTPSlot index={2} className={inputOptClass} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} className={inputOptClass} />
              <InputOTPSlot index={4} className={cn(inputOptClass)} />
              <InputOTPSlot index={5} className={cn(inputOptClass)} />
            </InputOTPGroup>
          </InputOTP>

          <div className="flex gap-2 text-sm">
            <p>{"Didn't work?"} </p>
            <span
              className="flex items-center gap-2 text-blue-400 transition-all cursor-pointer hover:underline "
              onClick={async () => {
                if (!isSendAgain) {
                  startSendAgain(async () => {
                    if (!form.getValues("password")) {
                      const json = await postEmail({
                        email: form.getValues("email"),
                        password: form.getValues("password"),
                      });

                      if (json.error) {
                        toast.error("Fail to resend email");
                      } else {
                        toast.success("Please check your email.");
                      }
                    } else {
                      router.replace(pathname || "/register");
                      form.setValue("email", existEmail || "");
                      form.setValue("password", "");
                      setIsConfirmed(false);
                    }
                  });
                }
              }}
            >
              {/* <Spinn
                                className={`${!isSendAgain
                                    ? "hidden"
                                    : "block animate-spin"
                                    }`}
                            /> */}
              Send me another code.
            </span>
          </div>
          <Button
            type="submit"
            className="flex items-center w-full h-8 gap-2 text-white transition-all bg-indigo-500 hover:bg-indigo-600"
            onClick={async () => {
              setIsConfirmed(false);
            }}
          >
            <ChevronLeft className=" size-5" />
            Change Email
          </Button>
        </div>
      </div>
    </div>
  );
}
