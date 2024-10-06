"use client";

import GradualSpacing from "@ui/molecules/ui-elements/text-gradual";

const Page = () => {
  return (
    <div className="grid w-full h-full place-items-center">
      <GradualSpacing
        className="text-center text-4xl font-bold tracking-[-0.1em] text-white md:text-7xl md:leading-[5rem]"
        text="Welcome to Austin Vu"
      />
    </div>
  );
};

export default Page;
