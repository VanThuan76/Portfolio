"use client";

import Image from "next/image";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { GROUP_PEOPLE_STATIC } from "@shared/constants/pages/blog";

import { useBreakpoint } from "@repo/hooks";

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
                <Image
                  priority
                  key={index}
                  width={150}
                  height={150}
                  alt={alt}
                  src={src}
                  className={`object-contain object-center transform ${translateX} ${translateY}`}
                />
              ),
            )}
          </div>
          <Image
            priority
            width={150}
            height={150}
            alt="@person_1"
            src="/images/blog/person_1.svg"
            className="absolute z-0 object-contain object-center -rotate-180 -bottom-10 -right-10 -scale-y-100"
          />
        </>
      )}
    </>
  );
};

export default Footer;
