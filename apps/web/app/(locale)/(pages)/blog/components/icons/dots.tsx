import React, { SVGProps } from "react";

const DotsIcon = ({ ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      width="24"
      height="24"
      color="#000000"
      fill="none"
      stroke="currentColor"
      {...rest}
    >
      <circle
        cx="3.41"
        cy="12"
        r="1.91"
        stroke="currentColor"
        strokeMiterlimit="10"
      />
      <circle
        cx="12"
        cy="12"
        r="1.91"
        stroke="currentColor"
        strokeMiterlimit="10"
      />
      <circle
        cx="20.59"
        cy="12"
        r="1.91"
        stroke="currentColor"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default DotsIcon;
