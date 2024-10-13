"use client";

import { m } from "framer-motion";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";

const LoadingCommon = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full gap-5 px-4 pt-6 bg-black/50 backdrop-blur-sm md:gap-0 md:py-6 md:px-12">
      <m.div
        className="w-[150px] h-[150px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <LoaderImage
          isLoader={false}
          width={150}
          height={150}
          alt="@logo"
          src="/logo.png"
          className="object-contain w-full h-full"
        />
      </m.div>
    </div>
  );
};

export default LoadingCommon;
