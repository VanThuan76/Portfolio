"use client";
import React from "react";

import { LoaderImage } from "@repo/design-system/components/molecules/ui-elements/loader-image";

const Page = () => {
  return (
    <div className="w-full h-full overflow-y-auto austin-scroll">
      <div className="relative w-full h-[800px]">
        <LoaderImage
          isLoader={false}
          width={1440}
          height={800}
          src="/images/course/bg_1_new.webp"
          alt="@bg1"
          className="absolute top-0 left-0 object-cover object-left w-full h-full md:object-top"
        />
        <LoaderImage
          isLoader={false}
          width={1440}
          height={800}
          src="/images/course/mask_1.webp"
          alt="@mask1"
          className="absolute bottom-0 left-0 object-cover object-center w-full h-full"
        />

        {/* Character */}

        <div className="absolute bottom-0 right-0 flex gap-2">
          <LoaderImage
            isLoader={false}
            width={1440}
            height={800}
            src="/images/course/character_1_1.webp"
            alt="@character1"
            className="object-contain object-center w-full h-full"
          />
          <LoaderImage
            isLoader={false}
            width={1440}
            height={800}
            src="/images/course/character_1_2.webp"
            alt="@character1"
            className="object-contain object-center w-full h-full"
          />
        </div>
      </div>
      <div className="relative w-full h-[800px]">
        <LoaderImage
          isLoader={false}
          width={1440}
          height={800}
          src="/images/course/bg_2_new.webp"
          alt="@bg"
          className="absolute top-0 left-0 object-cover object-left w-full h-full md:object-top"
        />
      </div>
      {/* <HorizontalScroll /> */}
    </div>
  );
};

export default Page;
