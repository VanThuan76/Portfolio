"use client";

import dynamic from "next/dynamic";
import { cn } from "@repo/design-system/utils/tw";

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
  return (
    <PixelTransition>
      <div
        className={cn(
          "relative w-full h-full pointer-events-auto",
          fontBlog.className,
        )}
        style={{ filter: "url(#grainy)" }}
        data-lenis-prevent="false"
      >
        <Header />
        {children}
        <Footer />
        <NavigateNewBlog />
      </div>
      <GrainyFilter className="w-full h-auto" />
    </PixelTransition>
  );
}
