"use client";

import { ChevronsLeftRight, X } from "lucide-react";

import { useAppDispatch, useAppSelector } from "@store/index";
import { setHasFullScreen, setHasSleep } from "@store/app-slice";

const NavigationApple = () => {
  const dispatch = useAppDispatch();

  const { hasFullScreen } = useAppSelector((state) => state.app);

  return (
    <div className="z-50 flex space-x-1">
      <div
        className="w-[10px] h-[10px] rounded-full bg-[#fe3645] group"
        onClick={() => dispatch(setHasSleep(true))}
      >
        <X className="hidden w-full h-full group-hover:block" color="black" />
      </div>
      <div className="w-[10px] h-[10px] rounded-full bg-[#FEB402]"></div>
      <div
        className="w-[10px] h-[10px] rounded-full bg-[#03CF02] group"
        onClick={() => {
          dispatch(setHasFullScreen(!hasFullScreen));
        }}
      >
        <ChevronsLeftRight
          className="hidden w-full h-full rotate-45 group-hover:block"
          color="black"
        />
      </div>
    </div>
  );
};

export default NavigationApple;
