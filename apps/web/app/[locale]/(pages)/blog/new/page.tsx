"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, m } from "framer-motion";

import { cn } from "@repo/design-system/utils/tw";
import { Button } from "@repo/design-system/components/atoms/button";

import BlogForm from "../components/forms/blog";

const hintVariants = {
  initial: { opacity: 0, x: -20, y: 0 },
  animate: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
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
        className={cn(
          "grid items-start justify-start w-full h-full gap-3 p-2 md:p-4 rounded-md bg-black/10",
          isMountHint ? "md:grid-cols-3" : "md:grid-cols-1",
        )}
      >
        <m.div className="order-2 w-full min-h-screen col-span-1 p-2 mx-auto bg-white rounded-sm md:col-span-2 md:order-1">
          <div className="h-full max-h-screen overflow-y-auto">
            <BlogForm />
          </div>
        </m.div>
        {isMountHint && (
          <m.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={hintVariants}
            transition={{ duration: 0.3 }}
            className="relative top-0 flex flex-col items-start justify-start order-1 col-span-1 gap-2 w-fit md:sticky md:order-2"
          >
            <h4 className="text-base font-bold md:text-lg">
              {t("title_new_blog")}
            </h4>
            <ul className="list-disc list-inside !block">
              <li className="!list-item !m-2">{t("description_new_blog_1")}</li>
              <li className="!list-item !m-2">{t("description_new_blog_2")}</li>
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
      </m.main>
    </AnimatePresence>
  );
};

export default Page;
