import React, { SVGProps } from "react";

const BorderBottomLeftIcon = ({ ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-200 -20 5 20"
      className="absolute z-40 bottom-0 left-0 w-[140px]"
      {...rest}
    >
      <path
        d="M-195-20-195-20-195-20M-200-0C-200-1-200-2.6667-200-4-200-2-200-0-196-0"
        fill="#fff"
      />
    </svg>
  );
};

export default BorderBottomLeftIcon;
