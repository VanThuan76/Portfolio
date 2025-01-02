"use client";

import dynamic from "next/dynamic";
import { m } from "framer-motion";
import { useLocale } from "next-intl";
import { useEffect, useState, useCallback } from "react";

import { cn } from "@repo/design-system/utils/tw";
import { useSupabaseBrowser } from "@repo/supabase/utils/client";
import { getTags, getBlogCategories } from "@repo/supabase/queries";

const BlogForm = dynamic(() => import("../components/forms/blog"), {
  ssr: false,
});
const HintNewBlog = dynamic(() => import("../components/hint-new-blog"), {
  ssr: false,
});
const LanguagesBlog = dynamic(() => import("../components/languages-blog"), {
  ssr: false,
});

export default function Page() {
  const supabase = useSupabaseBrowser();
  const locale = useLocale();

  const [optionTags, setOptionTags] = useState<{ value: any; label: any }[]>(
    [],
  );
  const [optionCategories, setOptionCategories] = useState<
    { value: any; label: any }[]
  >([]);
  const [currentLocaleForm, setCurrentLocaleForm] = useState(locale);
  const [isMountHint, setIsMountHint] = useState(true);

  useEffect(() => {
    const fetchOptionsData = async () => {
      const responseTags = await getTags(supabase);
      const responseCategories = await getBlogCategories(
        supabase,
        currentLocaleForm,
      );
      if (responseTags.status === 200)
        setOptionTags(
          responseTags.data.map((tag) => ({ value: tag.id, label: tag.value })),
        );
      if (responseCategories.status === 200)
        setOptionCategories(
          responseCategories.data.map((category) => ({
            value: category.id,
            label: category.name,
          })),
        );
    };
    fetchOptionsData();
  }, [currentLocaleForm]);

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "grid items-start justify-start w-full h-full gap-3 p-2 md:p-4 rounded-md bg-black/10",
        isMountHint
          ? "grid-cols-1 md:grid-cols-3"
          : "grid-cols-1 md:grid-cols-1",
      )}
    >
      <div className="relative order-2 w-full h-full col-span-1 p-2 mx-auto overflow-y-auto bg-white rounded-sm md:col-span-2 md:order-1">
        <BlogForm
          optionTags={optionTags}
          optionCategories={optionCategories}
          currentLocaleForm={currentLocaleForm}
          setCurrentLocaleForm={useCallback(
            (locale) => setCurrentLocaleForm(locale),
            [],
          )}
        />
        <div className="absolute top-8 right-5">
          <LanguagesBlog />
        </div>
      </div>
      <HintNewBlog
        isMountHint={isMountHint}
        setIsMountHint={useCallback((state) => setIsMountHint(state), [])}
      />
    </m.main>
  );
}
