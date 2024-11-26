"use client";

import Link from "next/link";
import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";

import { getSupabaseBrowserClient } from "@repo/supabase/utils/client";

import { Button } from "@repo/ui/src/components/atoms/button";
import { Input } from "@repo/design-system/components/atoms/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@repo/design-system/components/organisms/forms/form";

const FormSchema = z.object({
    email: z.string().email({ message: "Invalid Email Address" }),
    password: z.string().min(6, { message: "Password is too short" }),
});

export default function SignInForm({ redirectTo }: { redirectTo: string }) {
    const t = useTranslations("pages.auth");
    const router = useRouter();

    const [passwordReveal, setPasswordReveal] = useState(false);
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        const supabase = getSupabaseBrowserClient();
        if (!isPending) {
            startTransition(async () => {
                const { error } = await supabase.auth.signInWithPassword({
                    email: data.email,
                    password: data.password,
                });
                if (error) {
                    toast.error(error.message);
                } else {
                    router.push(redirectTo);
                }
            });
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold test-sm">
                                {t("email_address")}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    className="h-8"
                                    placeholder="example@gmail.com"
                                    type="email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-semibold">
                                {t("password")}
                            </FormLabel>
                            <FormControl>
                                <div className="relative ">
                                    <Input
                                        className="h-8"
                                        type={passwordReveal ? "text" : "password"}
                                        {...field}
                                    />
                                    <div
                                        className="absolute right-2 top-[30%] cursor-pointer group"
                                        onClick={() => setPasswordReveal(!passwordReveal)}
                                    >
                                        {passwordReveal ? (
                                            <Eye className="transition-all group-hover:scale-105" />
                                        ) : (
                                            <EyeOff className="transition-all group-hover:scale-105" />
                                        )}
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="flex items-center w-full h-8 gap-2 text-white transition-all bg-indigo-500 hover:bg-indigo-600"
                >
                    {/* <AiOutlineLoading3Quarters
                        className={cn(
                            !isPending ? "hidden" : "block animate-spin"
                        )}
                    /> */}
                    {t("continue")}
                </Button>
            </form>
            <div className="text-sm text-center">
                <h1>
                    {t("doesnt_already_account")}{" "}
                    <Link
                        href={
                            redirectTo
                                ? `/auth/register?next=` + redirectTo
                                : "/auth/register"
                        }
                        className="text-blue-400"
                    >
                        {t("register")}
                    </Link>
                </h1>
            </div>
        </Form>
    );
}
