"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, m } from "framer-motion";
import { useState } from "react";

const Menu = dynamic(() => import("@shared/layouts/navigation/menu"), {
    ssr: false,
});
const HeadMain = dynamic(() => import("@/shared/layouts/head"), { ssr: false });
const ModalProvider = dynamic(() => import("@providers/modal"), { ssr: false });
const BorderCollapse = dynamic(
    () => import("@shared/layouts/icons/border-collapse"),
    { ssr: false },
);
const FadeInItem = dynamic(
    () =>
        import("@repo/design-system/components/molecules/frame/fade-wrapper").then(
            (mod) => mod.Item,
        ),
    { ssr: false },
);
const FadeInContainer = dynamic(
    () =>
        import("@repo/design-system/components/molecules/frame/fade-wrapper").then(
            (mod) => mod.Container,
        ),
    { ssr: false },
);

const Intro = dynamic(() => import("./(home)/components/intro"), {
    ssr: false,
});

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [showIntro, setShowIntro] = useState(true);

    return (
        <AnimatePresence>
            {showIntro ? (
                <m.div
                    key="intro"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Intro onEnd={() => setShowIntro(false)} />
                </m.div>
            ) : (
                <>
                    <div className="relative w-full h-full border-t-[0.5px] border-b-[0.5px] border-r-[0.5px] inset-0 border-white pointer-events-auto" data-lenis-prevent="false">
                        <HeadMain />
                        <FadeInContainer className="w-full h-full pointer-events-none">
                            <FadeInItem className="w-full h-full pointer-events-auto">
                                {children}
                            </FadeInItem>
                        </FadeInContainer>
                        <ModalProvider />
                    </div>
                    <div className="fixed top-0 right-0">
                        <Menu />
                        <BorderCollapse />
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
