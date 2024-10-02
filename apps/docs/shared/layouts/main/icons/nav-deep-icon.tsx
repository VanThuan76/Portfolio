import React, { SVGProps } from "react";

const NavDeepIcon = ({ ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 170 38"
      {...rest}
    >
      <path
        fill="#fff"
        d="m0 38 6.197-1.62c.089-.026 9.204-2.464 13.854-7.435 2.839-3.038 5.404-6.48 7.882-9.814.841-1.14 1.715-2.312 2.597-3.46 3.087-4.042 7.368-9.063 13.117-12.068C46.797 1.958 52.546 0 62.07 0h45.884c9.524 0 15.273 1.958 18.424 3.603 5.756 3.005 10.029 8.034 13.116 12.068.874 1.148 1.748 2.32 2.598 3.46 2.477 3.333 5.043 6.776 7.881 9.814 4.65 4.97 13.765 7.41 13.854 7.435L170 38z"
      ></path>
      <mask
        id="ui-down_svg__a"
        width="16"
        height="7"
        x="75"
        y="18"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M75 18h16v7H75z"></path>
      </mask>
      <g fill="#6F5E91" mask="url(#ui-down_svg__a)">
        <path d="M87.49 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2M85.36 22.12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M83.24 24.24a1 1 0 1 0 0-2 1 1 0 0 0 0 2M81.12 22.12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M79 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path>
      </g>
    </svg>
  );
};

export default NavDeepIcon;
