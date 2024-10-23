import React, { SVGProps } from "react";

const BorderTopLeftIcon = ({ ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 5"
      className="absolute z-40 top-0 left-0 w-[500px]"
      {...rest}
    >
      <path d="M20 5H20L20 5M0 0C1 0 2.6667 0 4 0 2 0 0 0 0 4" fill="#fff" />
    </svg>
  );
};

export default BorderTopLeftIcon;
