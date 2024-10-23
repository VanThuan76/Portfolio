import React, { SVGProps } from "react";

const WavesPath = ({ ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="15 0 5 5"
      className="absolute z-40 top-0 right-0 rotate-90 w-[150px] transform scale-x-[-1]"
      {...rest}
    >
      <path
        d="M20 5C20 1 17 0 15 0H20M20 2 20 5c0-4-3-1-3-4C17 0 15 0 15 0H17"
        fill="#fff"
      />
    </svg>
  );
};

export default WavesPath;
