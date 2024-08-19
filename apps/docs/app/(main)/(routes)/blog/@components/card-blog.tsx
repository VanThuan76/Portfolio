"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ClockIcon } from "lucide-react";
import { cn } from "@utils/tw";

import { ITag } from "@server/data/types/tag";

import { Badge } from "@ui/molecules/ui-elements/badge";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import { CoolMode } from "@ui/molecules/other-utils/cool-mode";

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
        <CoolMode>
            <div className={cn(className)}>
                {items.map((item, idx) => (
                    <Link
                        href={"/blog/" + item.slug}
                        key={item?.id}
                        className="relative block w-full h-full p-2 group"
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
                        <Card className="relative p-0 m-0 dark:bg-[#393E46] bg-screen-mobile overflow-hidden shadow-lg">
                            <div className="w-[30%] h-full md:w-full md:h-[150px]">
                                <LoaderImage
                                    isLoader={false}
                                    src={item.image_url}
                                    alt={item.title}
                                    className="object-cover object-center w-full h-full border-b rounded-md md:rounded-none border-b-gray-400"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div className="px-2 pb-2 md:px-4 md:pb-4">
                                <CardTitle className="flex items-center justify-start gap-1 mb-0 text-sm font-bold text-black md:font-medium md:mb-1 dark:text-white">
                                    {item.icon && item.icon}
                                    {item.title}
                                </CardTitle>
                                <div className="flex items-center justify-start w-full gap-2 md:hidden">
                                    <div className="flex items-center justify-center gap-1">
                                        <ClockIcon className="w-[14px] h-[14px] text-black" />
                                        <span className="text-xs font-normal text-black">
                                            3 min read
                                        </span>
                                    </div>
                                </div>
                                {item.tags &&
                                    item.tags.map((item, index) => {
                                        return (
                                            <Badge
                                                key={index}
                                                className="hidden font-normal text-black bg-gray-300 rounded-sm md:block"
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
        </CoolMode>
    );
};
export default CardBlog;
