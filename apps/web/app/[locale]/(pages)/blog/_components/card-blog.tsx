"use client";

import { useState, useTransition } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ClockIcon } from "lucide-react";
import { AnimatePresence, m } from "framer-motion";
import { cn } from "@utils/tw";

import { useModal } from "@shared/hooks/use-modal";
import { Badge } from "@ui/molecules/ui-elements/badge";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import { Card, CardTitle } from "@ui/organisms/cards/card-hover-effect";

import { BlogTagSupabase, IBlog } from "@shared/query/types/blog";

const CardBlog = ({
  items,
  className,
}: {
  items: IBlog[];
  className?: string;
}) => {
  const router = useRouter();
  const locale = useLocale();
  const cardVariants = {
    initial: { opacity: 1, scale: 1, width: "330px", height: "auto" },
    click: { opacity: 0.5, scale: 1.5, width: "750px", height: "500px" },
  };

  const [isPending, startTransition] = useTransition();

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedSlug, setClickedSlug] = useState<string | null>(null);

  const { onOpen } = useModal();

  function handleRedirect(card: IBlog) {
    // startTransition(() => {
    //     setTimeout(() => {
    //         router.push(`/${locale}/blog/${card.slug}`, { scroll: false });
    //     }, 300);
    // });
    setClickedSlug(card.slug);
    onOpen("blog", card);
  }

  return (
    <div className={cn(className)}>
      {items.map((item: IBlog, index: number) => (
        <m.div
          layout
          id={item.slug}
          key={item.slug}
          initial="initial"
          animate={clickedSlug === item.slug ? "click" : "initial"}
          // variants={cardVariants}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="relative block w-full h-full p-0 md:p-2 group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleRedirect(item)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <m.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-md"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.75,
                    type: "spring",
                    ease: "easeInOut",
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.75,
                    type: "spring",
                    ease: "easeInOut",
                    delay: 0.35,
                  },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="relative p-0 m-0 dark:bg-[#393E46] bg-white overflow-hidden shadow-lg">
            <div className="w-[30%] h-full md:w-full md:h-[100px]">
              <LoaderImage
                isLoader={false}
                src={item.image_url}
                alt={item.title as string}
                className="object-cover object-center w-full h-full border-b rounded-md md:rounded-none border-b-gray-400"
                width={400}
                height={400}
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-1 px-2 pb-2">
              <CardTitle className="flex items-center justify-start !mt-1 order-1 gap-1 text-sm font-bold text-black md:font-medium dark:text-white">
                {item.title}
              </CardTitle>
              <div className="flex items-center justify-start order-3 w-full gap-2">
                <div className="flex items-center justify-center gap-1">
                  <ClockIcon className="w-[14px] h-[14px] text-black" />
                  <span className="text-xs font-normal text-black">
                    3 min read
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-start justify-start order-2 w-full gap-2">
                {item.tags &&
                  item.tags.map((tag: BlogTagSupabase, index: number) => {
                    return (
                      <Badge
                        key={index}
                        className="hidden font-normal text-black bg-gray-300 rounded-sm md:block"
                      >
                        {tag.name}
                      </Badge>
                    );
                  })}
              </div>
              {isPending && clickedSlug === item.slug && (
                <div className="absolute -right-5 -bottom-5">
                  <LoaderImage
                    isLoader={false}
                    width={500}
                    height={500}
                    alt="loading"
                    src="/images/blog/redirect.gif"
                    className="object-contain w-[100px] h-[100px]"
                  />
                </div>
              )}
            </div>
          </Card>
        </m.div>
      ))}
    </div>
  );
};
export default CardBlog;
