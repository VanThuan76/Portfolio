"use client";
import Link from "next/link";
import { cn } from "@/lib/tw";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { LoaderImage } from "@/components/custom/loader-image";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card-hover-effect";

export const CardBlog = ({
  items,
  className,
}: {
  items: {
    id: string;
    title: string;
    slug: string;
    icon?: React.ReactNode;
    image_url: string;
    tags?: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5",
        className,
      )}
    >
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
          <Card className="relative p-0 m-0 bg-[#393E46] dark:bg-white overflow-hidden shadow-lg">
            <LoaderImage
              isLoader={false}
              src={item.image_url}
              alt={item.title}
              className="w-full h-[100px] object-cover object-center border-b border-b-gray-400"
              width={355}
              height={355}
            />
            <div className="px-4 pb-4">
              <CardTitle className="flex justify-start items-center gap-1 text-sm mb-1 light:text-white dark:text-black ">
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
                      {item}
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
