import { Metadata } from "next";

import { cn } from "@repo/design-system/utils/tw";
import { fontBlog } from "@shared/utils/font";

import CurveTransition from "@shared/layouts/transitions/curve";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import GrainyFilter from "./components/icons/grainy-filter";
import NavigateNewBlog from "./components/navigate-new-blog";

export async function generateMetadata({ params }): Promise<Metadata> {
  const { locale } = await params;

  const baseUrl = `https://www.austinvu.tech/${locale}/blog`;

  return {
    title: {
      default: "Blog",
      template: `%s | Blog`,
    },
    description: "Explore a variety of articles and insights on our blog.",
    openGraph: {
      title: "Blog",
      description: "Discover the latest articles, tips, and insights.",
      url: baseUrl,
      images: ["https://www.austinvu.tech/banner-light.png"],
    },
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        className={cn(
          "relative w-full min-h-screen pointer-events-none",
          fontBlog.className,
        )}
        style={{ filter: "url(#grainy)" }}
        data-lenis-prevent="false"
      >
        <CurveTransition backgroundColor="#fff">
          <div className="relative w-full min-h-screen overflow-x-hidden overflow-y-auto pointer-events-auto bg-black/10">
            <Header />
            {children}
            <Footer />
            <NavigateNewBlog />
          </div>
        </CurveTransition>
      </div>
      <GrainyFilter />
    </>
  );
}
