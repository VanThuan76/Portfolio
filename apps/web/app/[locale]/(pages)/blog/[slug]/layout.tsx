import { Metadata } from "next";

import { OpenAIProvider } from "@repo/editor/components/openai/openai-context";
import { getBlogBySlug } from "@repo/supabase/queries/actions/blog/blog-actions";

import { getSupabaseBrowserClient } from "@repo/supabase/utils/client";
import ReCaptchaProvider from "@/providers/re-captcha";

export async function generateMetadata({ params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const supabase = getSupabaseBrowserClient();
  let baseUrl;
  let title;
  let description;
  let article;

  const response = await getBlogBySlug(supabase, slug, locale);
  article = response.status === 200 ? response.data : null;

  if (article) {
    baseUrl = `https://www.austinvu.tech/${locale}/blog/${slug}`;
    title = article.title;
    description = article.description || "Read this blog post to learn more.";
  } else {
    baseUrl = `https://www.austinvu.tech/${locale}/blog`;
    title = "Blog Post Not Found";
    description = "The blog post you are looking for does not exist.";
  }

  return {
    title: {
      default: title,
      template: `%s | Blog | Austin Vu`,
    },
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: baseUrl,
      images: ["https://www.austinvu.tech/banner-light.png"],
    },
  };
}

export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReCaptchaProvider>
      <OpenAIProvider>
        <div className="w-full h-full min-h-screen overflow-y-auto">
          {children}
        </div>
      </OpenAIProvider>
    </ReCaptchaProvider>
  );
}
