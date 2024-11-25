import { getTranslations } from "next-intl/server";

import { getSupabaseBrowserClient } from "@repo/supabase/utils/client";
import {
  BlogCategorySuspbase,
  getBlogCategories,
  getBlogs,
} from "@repo/supabase/queries";

import { IBlog } from "@repo/supabase/queries";

import { GROUP_REFERENCES } from "@shared/constants/pages/blog";

import { Tabs } from "@repo/design-system/components/molecules/tabs/tabs";
import EmblaCarousel from "@repo/design-system/components/molecules/effects/embla-carousel";
import CardBlog from "./components/card-blog";

type Params = Promise<{ locale: string }>;

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params;

  const t = await getTranslations("pages.blog");
  const supabase = getSupabaseBrowserClient();

  const [blogs, blogCategories] = await Promise.all([
    getBlogs(supabase, locale).then((res) => res.data),
    getBlogCategories(supabase, locale).then((res) => res.data),
  ]);

  return (
    <div className="relative z-10 grid items-start justify-start w-full h-full grid-cols-1 gap-0 p-2 overflow-y-auto sm:p-4 md:gap-2 md:grid-cols-9 md:pt-0 md:px-6 pb-28 md:pb-0">
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
          <span className="w-auto pb-1 mt-0 text-sm border-b md:w-full border-b-black">
            {t("references")}
          </span>
          <EmblaCarousel
            slides={GROUP_REFERENCES.map((item) => ({
              url: item.url as string,
              alt: item.alt,
            }))}
            options={{ dragFree: true, loop: true, slidesToScroll: 3 }}
            className="w-[50px] h-[50px] p-1 md:p-0 rounded-md"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-full gap-2 h-fit">
          <span className="text-xs leading-4">{t("des_footer_1")}</span>
          <span className="text-xs leading-4">{t("des_footer_2")}</span>
        </div>
      </div>
    </div>
  );
}
