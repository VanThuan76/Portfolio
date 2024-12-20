import { Metadata } from "next";
import { headers } from "next/headers";
import { getTranslations } from "next-intl/server";

import { OpenAIProvider } from "@repo/editor/components/openai/openai-context";
import { getBlogBySlug } from "@repo/supabase/queries/actions/blog/blog-actions";

import { getSupabaseBrowserClient } from "@repo/supabase/utils/client";
import ReCaptchaProvider from "@/providers/re-captcha";

export async function generateMetadata({ params }): Promise<Metadata> {
  const headerNext = await headers();
  const locale = headerNext.get("x-my-locale") || "en";
  const tMetadataBlog = await getTranslations("metadata.blog");

  const { slug } = await params;
  const supabase = getSupabaseBrowserClient();
  let baseUrl;
  let title;
  let description;
  let article;

  const response = await getBlogBySlug(supabase, slug, locale);
  article = response.status === 200 ? response.data : null;

  if (article) {
    baseUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/${locale}/blog/${slug}`;
    title = article.title;
    description = article.description;
  } else {
    baseUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/${locale}/blog`;
    title = "Blog Post Not Found";
    description = "The blog post you are looking for does not exist.";
  }

  return {
    title: {
      default: title,
      template: `%s | ${tMetadataBlog("blogTitle")} | Austin Vu`,
    },
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: baseUrl,
      images: [`${process.env.NEXT_PUBLIC_WEB_URL}/banner-light.png`],
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
