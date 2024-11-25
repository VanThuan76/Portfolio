"use client";

import dynamic from "next/dynamic";

const Menu = dynamic(() => import("@shared/layouts/navigation/menu"), {
  ssr: false,
});
const HeadMain = dynamic(() => import("@/shared/layouts/head"), { ssr: false });
const ModalProvider = dynamic(() => import("@providers/modal"), { ssr: false });
const BorderCollapse = dynamic(
  () => import("@shared/layouts/icons/border-collapse"),
  { ssr: false },
);
const SmoothScroll = dynamic(
  () =>
    import(
      "@repo/design-system/components/organisms/scroll/smooth-scroll"
    ).then((mod) => mod.SmoothScroll),
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

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SmoothScroll className="relative z-50 pointer-events-none">
      <div className="relative w-full h-full border-t-[0.5px] border-b-[0.5px] border-r-[0.5px] inset-0 border-white pointer-events-auto">
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
    </SmoothScroll>
  );
}
