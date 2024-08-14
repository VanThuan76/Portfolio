"use client";

import { ChevronsLeftRight, X } from "lucide-react";

import { useAppDispatch, useAppSelector } from "@store/index";
import { setHasFullScreen, setHasSleep } from "@store/app-slice";

const NavigationApple = () => {
  const dispatch = useAppDispatch();

  const { hasFullScreen } = useAppSelector((state) => state.app);

  return (
    <div className="space-x-1 z-50 flex">
      <div
        className="w-[12px] h-[12px] rounded-full bg-[#fe3645] group"
        onClick={() => dispatch(setHasSleep(true))}
      >
        <X className="w-full h-full hidden group-hover:block" color="black" />
      </div>
      <div className="w-[12px] h-[12px] rounded-full bg-[#FEB402]"></div>
      <div
        className="w-[12px] h-[12px] rounded-full bg-[#03CF02] group"
        onClick={() => {
          dispatch(setHasFullScreen(!hasFullScreen));
        }}
      >
        <ChevronsLeftRight
          className="w-full h-full rotate-45 hidden group-hover:block"
          color="black"
        />
      </div>
    </div>
  );
};

export default NavigationApple;
