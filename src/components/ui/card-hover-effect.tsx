import Link from "next/link";
import { cn } from "@/lib/tw";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { LoaderImage } from "@/components/custom/loader-image";
import { Badge } from "@/components/ui/badge";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        icon?: React.ReactNode;
        image: string;
        link: string;
        tags?: string[]
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link
                    href={item?.link}
                    key={item?.link}
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
                            src={item.image}
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
                            {item.tags && item.tags.length > 0 && item.tags.map((item, index) => {
                                return (
                                    <Badge className="bg-gray-300 font-normal rounded-sm text-black" key={index}>{item}</Badge>
                                )
                            })}
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-sm h-full w-full p-4 overflow-hidden bg-black border-2 border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                {children}
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
