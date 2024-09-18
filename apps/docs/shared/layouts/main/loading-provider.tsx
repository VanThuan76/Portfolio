"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const LoadingContext = createContext<{ loading: boolean }>({ loading: false });

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const originalPush = router.push;
        router.push = (...args) => {
            setLoading(true);
            startTransition(() => {
                originalPush.apply(router, args);
            });
        };

        return () => {
            router.push = originalPush;
        };
    }, [router, startTransition]);

    useEffect(() => {
        if (isPending) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [isPending]);

    return (
        <LoadingContext.Provider value={{ loading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoadingContext = () => {
    return useContext(LoadingContext);
};
