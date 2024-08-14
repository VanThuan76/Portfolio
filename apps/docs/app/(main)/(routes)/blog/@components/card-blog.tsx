"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@utils/tw";

import { ITag } from "@server/data/types/tag";

import { Badge } from "@ui/molecules/ui-elements/badge";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";

import { Card, CardTitle } from "@ui/organisms/cards/card-hover-effect";

const CardBlog = ({
  items,
  className,
}: {
  items: {
    id: string;
    title: string;
    slug: string;
    icon?: React.ReactNode;
    image_url: string;
    tags?: ITag[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn(className)}>
      {items.map((item, idx) => (
        <Link
          href={"/blog/" + item.slug}
          key={item?.id}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-md"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="relative p-0 m-0 dark:bg-[#393E46] bg-white overflow-hidden shadow-lg">
            <LoaderImage
              isLoader={false}
              src={item.image_url}
              alt={item.title}
              className="w-full h-[100px] object-cover object-center border-b border-b-gray-400"
              width={355}
              height={355}
            />
            <div className="px-4 pb-4">
              <CardTitle className="flex justify-start items-center gap-1 text-sm mb-1 dark:text-white text-black font-medium">
                {item.icon && item.icon}
                {item.title}
              </CardTitle>
              {item.tags &&
                item.tags.length > 0 &&
                item.tags.map((item, index) => {
                  return (
                    <Badge
                      className="bg-gray-300 font-normal rounded-sm text-black"
                      key={index}
                    >
                      {item.title}
                    </Badge>
                  );
                })}
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};
export default CardBlog;
