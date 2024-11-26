"use client";

import dynamic from "next/dynamic";
import { cn } from "@repo/design-system/utils/tw";
import { useIsSafari } from "@repo/hooks";

import { fontBlog } from "@shared/utils/font";

import PixelTransition from "@/shared/layouts/transitions/pixel";

import Header from "./components/layout/header";
import GrainyFilter from "./components/icons/grainy-filter";

const Footer = dynamic(() => import("./components/layout/footer"), {
    ssr: false,
});
const NavigateNewBlog = dynamic(
    () => import("./components/navigate-new-blog"),
    { ssr: false },
);

export default function BlogTemplate({
    children,
}: {
    children: React.ReactNode;
}) {
    const isSafari = useIsSafari();

    return (
        <PixelTransition>
            <div
                className={cn(
                    "relative w-full min-h-screen h-full pointer-events-auto",
                    fontBlog.className,
                )}
                style={
                    !isSafari
                        ? { filter: "url(#grainy)", WebkitFilter: "url(#grainy)" }
                        : {}
                }
                data-lenis-prevent="false"
            >
                <GrainyFilter className="absolute top-0 left-0 w-full h-full pointer-events-none" />
                <Header />
                {children}
                <Footer />
                <NavigateNewBlog />
            </div>
        </PixelTransition>
    );
}
