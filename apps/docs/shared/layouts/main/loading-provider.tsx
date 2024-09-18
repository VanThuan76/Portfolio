"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useOptimistic } from "react";

const LoadingContext = createContext<{ loading: boolean }>({ loading: false });

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const router = useRouter();
    const [loading, setLoading] = useOptimistic(false);
    useEffect(() => {
        if (router.push.name === "patched") return;
        const push = router.push;
        router.push = function patched(...args) {
            setLoading(true);
            push.apply(history, args);
        };
    }, []);

    return (
        <LoadingContext.Provider value={{ loading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoadingContext = () => {
    return useContext(LoadingContext);
};
