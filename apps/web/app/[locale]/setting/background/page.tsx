"use client";

import { Separator } from "@ui/molecules/other-utils/separator";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";

const Page = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-full gap-5">
      <h1 className="text-lg font-bold underline md:text-xl">Background</h1>
      <div className="flex flex-wrap items-start justify-between w-full gap-5 md:flex-nowrap">
        <div className="w-full h-full overflow-hidden border rounded-md border-neutral-300">
          <LoaderImage
            isLoader={false}
            width={300}
            height={300}
            alt="@currentBackground"
            src=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full h-full">Beautifully</div>
      </div>
      <Separator />
      <h3>Animate Background(Desktop)</h3>
      <div className="grid items-start justify-start w-full grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
        {/* {BACKGROUNDS.map((item, index) => {
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
        })} */}
      </div>
      <h3>Color Background</h3>
    </div>
  );
};

export default Page;
