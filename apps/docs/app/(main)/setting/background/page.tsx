"use client";

import Image from "next/image";
import { cn } from "@utils/tw";

import { BACKGROUNDS } from "@shared/constants";
import { useAppDispatch, useAppSelector } from "@store/index";

import { Separator } from "@ui/molecules/other-utils/separator";
import { setInitBackground } from "@store/app-slice";

const Page = () => {
  const initBackground = useAppSelector((state) => state.app.initBackground);
  const dispatch = useAppDispatch();

  function handleReplaceBackground(urlBg: string) {
    dispatch(setInitBackground(urlBg));
  }

  return (
    <div className="flex flex-col items-start justify-start w-full h-full gap-5">
      <h1 className="text-lg font-bold underline md:text-xl">Background</h1>
      <div className="flex flex-wrap items-start justify-between w-full gap-5 md:flex-nowrap">
        <div className="w-full h-full overflow-hidden border rounded-md border-neutral-300">
          <Image
            width={300}
            height={300}
            alt="@currentBackground"
            src={initBackground}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full h-full">Beautifully</div>
      </div>
      <Separator />
      <h3>Animate Background</h3>
      <div className="grid items-start justify-start w-full grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
        {BACKGROUNDS.map((item, index) => {
          return (
            <div
              key={index}
              className={cn(
                "w-[120px] h-[100px] rounded-md overflow-hidden cursor-pointer",
                initBackground === item && "border-2 border-sky-300",
              )}
              onClick={() => handleReplaceBackground(item)}
            >
              <Image
                width={300}
                height={300}
                alt="@background"
                src={item}
                className="object-cover object-center w-full h-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
