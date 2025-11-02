import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { getTranslations } from "next-intl/server";

import { useSupabaseServer } from "@repo/supabase/utils/server";
import {
  BlogCategorySuspbase,
  getBlogCategories,
  getBlogs,
} from "@repo/supabase/queries";

import { IBlog } from "@repo/supabase/queries";
import { GROUP_REFERENCES } from "@shared/constants/pages/blog";
import { Tabs } from "@repo/design-system/components/molecules/tabs/tabs";

import CardBlog from "./components/card-blog";
import LanguagesBlog from "./components/languages-blog";

export default async function Page() {
  const headerNext = await headers();
  const locale = headerNext.get("x-my-locale") || "en";

  const t = await getTranslations("pages.blog");
  const tPrivacyPolicy = await getTranslations("privacy-policy");
  const tTermOfService = await getTranslations("terms-of-service");
  const tLanguage = await getTranslations("languages");
  const supabase = await useSupabaseServer();

  const [blogs, blogCategories] = await Promise.all([
    getBlogs(supabase, locale).then((res) => res.data),
    getBlogCategories(supabase, locale).then((res) => res.data),
  ]);

  return (
    <div className="relative z-10 grid items-start justify-start w-full h-full grid-cols-1 gap-0 p-1 overflow-y-auto sm:p-4 md:gap-2 md:grid-cols-9 md:pt-0 md:px-6 pb-28 md:pb-0">
      <div className="order-1 w-full col-span-1 pb-5 mx-auto h-fit md:order-2 md:col-span-8 md:py-5">
        <div className="h-full [perspective:1000px] relative flex flex-col w-full items-start justify-start">
          <Tabs
            tabs={blogCategories.map((category: BlogCategorySuspbase) => ({
              title: category.name as string,
              value: category.name as string,
              content: (
                <CardBlog
                  items={blogs.filter(
                    (blog: IBlog) => blog.category_id === category.id,
                  )}
                  className="grid items-start justify-start grid-cols-1 gap-5 py-3 md:grid-cols-2 lg:grid-cols-4 md:gap-0"
                />
              ),
            }))}
          />
        </div>
      </div>
      <div className="relative top-0 order-2 w-full space-y-4 h-fit md:order-1 md:sticky">
        <div className="flex flex-col items-start justify-start order-1 w-full h-full col-span-1 gap-3 mx-auto mt-0 mb-5 overflow-hidden border-none md:mb-0 md:mt-6 md:border-r md:border-r-slate-400">
          <div className="hidden pb-2 border-b cursor-pointer md:block border-b-black dark:border-b-white">
            <p className="text-sm">{t("for_you")}</p>
          </div>
          <div className="hidden pb-2 border-b cursor-pointer md:block border-b-black dark:border-b-white">
            <p className="text-sm">{t("relevant")}</p>
          </div>
          <div className="hidden pb-2 border-b cursor-pointer md:block border-b-black dark:border-b-white">
            <p className="text-sm">{t("latest")}</p>
          </div>
          <span className="w-auto pb-1 mt-0 text-sm border-b border-b-black">
            {tLanguage("languages")}
          </span>
          <LanguagesBlog />
          <span className="w-auto pb-1 mt-0 text-sm border-b md:w-full border-b-black">
            {t("references")}
          </span>
          <div className="relative flex max-w-[100vw] overflow-hidden">
            <div className="flex w-max animate-marquee [--duration:15s] hover:[animation-play-state:paused]">
              {GROUP_REFERENCES.concat(GROUP_REFERENCES).map((item, index) => (
                <div key={index} className="h-full">
                  <div className="relative h-full w-[50px] rounded-2xl border border-white/5 bg-white/5">
                    <div className="flex items-center gap-4 mt-auto">
                      <Image
                        loading="lazy"
                        src={item.url}
                        alt={item.alt as string}
                        width={50}
                        height={50}
                        sizes="(max-width: 600px) 30px, (max-width: 1024px) 40px, 50px"
                        className="w-10 h-10 p-1 rounded-md md:p-0"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full gap-2 h-fit">
          <Link
            href="/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs leading-4 underline hover:text-gray-500"
          >
            {tPrivacyPolicy("title")}
          </Link>
          <Link
            href="/legal/terms-of-service"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs leading-4 underline hover:text-gray-500"
          >
            {tTermOfService("title")}
          </Link>
          <span className="text-xs leading-4">{t("des_footer_1")}</span>
          <span className="text-xs leading-4">{t("des_footer_2")}</span>
        </div>
      </div>
    </div>
  );
}
