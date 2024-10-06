"use client";

import { useTheme } from "next-themes";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";

const DEMO_DISPLAY_BACKGROUNDS = [
  { image: "/background/bg-demo-dark-mode.png", value: "dark" },
  { image: "/background/bg-demo-light-mode.png", value: "light" },
];

const Page = () => {
  const { setTheme } = useTheme();

  function changeDisplay(theme: "dark" | "light" | "system") {
    setTheme(theme);
  }

  return (
    <div className="flex flex-col items-start justify-start w-full h-full gap-5">
      <h1 className="text-lg font-bold underline md:text-xl">Display</h1>
      <div className="flex flex-wrap items-start justify-between w-full gap-5 md:flex-nowrap">
        <h3 className="w-full">Display</h3>
        <div className="flex items-center justify-end gap-2">
          {DEMO_DISPLAY_BACKGROUNDS.map((item, index) => {
            return (
              <div key={index} className="relative flex-col w-full h-full">
                <div className="w-full h-full overflow-hidden border rounded-md border-neutral-300">
                  <LoaderImage
                    isLoader={false}
                    width={300}
                    height={300}
                    alt="@display"
                    src={item.image}
                    className="object-cover w-full h-full"
                    onClick={() =>
                      changeDisplay(item.value as "dark" | "light" | "system")
                    }
                  />
                </div>
                <span className="absolute text-[10px] uppercase -translate-x-1/2 -bottom-5 left-1/2">
                  {item.value}
                </span>
              </div>
            );
          })}
          <div className="relative flex-col w-full h-full">
            <div
              className="flex w-full h-full overflow-hidden border rounded-md border-neutral-300"
              onClick={() => changeDisplay("system")}
            >
              <LoaderImage
                isLoader={false}
                width={150}
                height={150}
                alt="@displayLight"
                src={DEMO_DISPLAY_BACKGROUNDS[1]!.image}
                className="object-cover w-1/2 h-full"
              />
              <LoaderImage
                isLoader={false}
                width={150}
                height={150}
                alt="@displayDark"
                src={DEMO_DISPLAY_BACKGROUNDS[0]!.image}
                className="object-cover w-1/2 h-full"
              />
            </div>
            <span className="absolute text-[10px] uppercase -translate-x-1/2 -bottom-5 left-1/2">
              AUTO
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
