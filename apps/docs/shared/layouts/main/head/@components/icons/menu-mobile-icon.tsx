import React, { SVGProps } from "react";

const MenuMobileIcon = ({ ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="white"
      color="#fff"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M19.155 49.992H44.5a5.5 5.5 0 0 0 5.5-5.5V19.176c0-2.868-1.14-5.618-3.17-7.64L38.455 3.16A10.8 10.8 0 0 0 30.816 0H5.5A5.5 5.5 0 0 0 0 5.5v25.41a10.82 10.82 0 0 0 3.198 7.677l8.347 8.273a10.8 10.8 0 0 0 7.61 3.132"
      ></path>
    </svg>
  );
};

export default MenuMobileIcon;
