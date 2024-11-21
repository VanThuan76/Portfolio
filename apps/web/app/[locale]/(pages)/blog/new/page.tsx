"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, m } from "framer-motion";

import { Button } from "@repo/design-system/components/atoms/button";

const BlogForm = dynamic(() => import("../components/forms/blog"), {
  ssr: false,
});

const hintVariants = {
  initial: { opacity: 0, x: -20, y: 0 },
  animate: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -20, y: 0 },
};

const Page = () => {
  const t = useTranslations("pages.blog");
  const [isMountHint, setIsMountHint] = useState(true);

  return (
    <AnimatePresence mode="wait">
      <m.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-black/10 grid items-center justify-center md:items-start md:justify-start w-full min-h-screen gap-3 p-2 md:p-4 rounded-md ${isMountHint ? "md:grid-cols-3" : "md:grid-cols-1"}`}
      >
        <m.div
          className="order-2 w-full h-full col-span-1 p-2 bg-white rounded-sm md:col-span-2 md:order-1"
          layout
        >
          <BlogForm />
        </m.div>
        <AnimatePresence mode="wait">
          {isMountHint && (
            <m.div
              layout
              initial="initial"
              animate="animate"
              exit="exit"
              variants={hintVariants}
              transition={{ duration: 0.3 }}
              className="relative top-0 flex flex-col items-start justify-start order-1 w-full col-span-1 gap-2 md:sticky md:order-2"
            >
              <h4 className="text-base font-bold md:text-lg">
                {t("title_new_blog")}
              </h4>
              <ul className="list-disc list-inside !block">
                <li className="!list-item !m-2">
                  {t("description_new_blog_1")}
                </li>
                <li className="!list-item !m-2">
                  {t("description_new_blog_2")}
                </li>
              </ul>
              <Button
                type="button"
                className="self-start md:self-center"
                onClick={() => setIsMountHint(false)}
              >
                {t("understand_new_blog")}
              </Button>
            </m.div>
          )}
        </AnimatePresence>
      </m.main>
    </AnimatePresence>
  );
};

export default Page;
