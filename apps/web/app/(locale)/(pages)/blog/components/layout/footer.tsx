"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { GROUP_PEOPLE_STATIC } from "@shared/constants/pages/blog";
import { PLACE_HOLDER_BLUR_HASH } from "@/shared/constants";

import { cn } from "@repo/design-system/utils/tw";
import { useBreakpoint } from "@repo/hooks";

import { BlurImage } from "@repo/design-system/components/molecules/ui-elements/blur-image";

const Footer = () => {
    const pathName = usePathname();
    const breakpoint = useBreakpoint();

    const isSlugBlog = useMemo(
        () => pathName.split("/").length >= 3 || ["xs", "sm"].includes(breakpoint),
        [pathName, breakpoint],
    );

    return (
        <>
            {!isSlugBlog && (
                <>
                    <div className="absolute z-0 flex -bottom-10 -left-5">
                        {GROUP_PEOPLE_STATIC.map(
                            ({ src, alt, translateX, translateY }, index) => (
                                <BlurImage
                                    key={index}
                                    priority
                                    alt={alt}
                                    src={src}
                                    blurDataURL={src ?? PLACE_HOLDER_BLUR_HASH}
                                    className={cn(
                                        "object-contain object-center transform",
                                        translateX,
                                        translateY,
                                    )}
                                    width={150}
                                    height={150}
                                    placeholder="blur"
                                    sizes="(max-width: 150px) 150px, 150px"
                                />
                            ),
                        )}
                    </div>
                    <BlurImage
                        priority
                        alt="@person_1"
                        src="/images/blog/person_1.svg"
                        blurDataURL={PLACE_HOLDER_BLUR_HASH}
                        className="absolute z-0 object-contain object-center -rotate-180 -bottom-10 -right-10 -scale-y-100"
                        width={150}
                        height={150}
                        placeholder="blur"
                        sizes="(max-width: 150px) 150px, 150px"
                    />
                </>
            )}
        </>
    );
};

export default Footer;
