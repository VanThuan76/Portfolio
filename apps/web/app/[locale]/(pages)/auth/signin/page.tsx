"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Social from "@repo/auth/components/social";
import SignInForm from "@repo/auth/components/signin";

import PatternBackground from "../components/icons/pattern-background";

export default function Page() {
    const t = useTranslations("pages.auth");
    const queryString =
        typeof window !== "undefined" ? window?.location.search : "";
    const urlParams = new URLSearchParams(queryString);

    const next = urlParams.get("next");

    return (
        <div className="relative flex items-center justify-center h-screen">
            <div className="fixed z-20 w-full sm:w-[26rem] shadow sm:p-5  border dark:border-zinc-800 rounded-md bg-white">
                <div className="p-5 space-y-5">
                    <div className="space-y-3 text-center">
                        <Image
                            src="/logo.png"
                            alt="@logo"
                            width={50}
                            height={50}
                            className="mx-auto rounded-full "
                        />
                        <h1 className="font-bold">{t("sign_in")}</h1>
                        <p className="text-sm">{t("signin_description")}</p>
                    </div>
                    <Social redirectTo={next || "/"} />
                    <div className="flex items-center gap-5">
                        <div className="flex-1 h-[0.5px] w-full bg-zinc-400 dark:bg-zinc-800"></div>
                        <div className="text-sm">{t("or")}</div>
                        <div className="flex-1 h-[0.5px] w-full bg-zinc-400 dark:bg-zinc-800"></div>
                    </div>
                    <SignInForm redirectTo={next || "/"} />
                </div>
            </div>
            <PatternBackground className="absolute z-10 w-full h-full" />
        </div>
    );
}
