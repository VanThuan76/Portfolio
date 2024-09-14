"use client";

import { useTransition } from "react";

export const usePageTransition = () => {
    const [isPending, startTransition] = useTransition();

    const dispatch = (callback: any) => {
        startTransition(() => {
            callback();
        });
    };

    return { isPending, dispatch };
};
