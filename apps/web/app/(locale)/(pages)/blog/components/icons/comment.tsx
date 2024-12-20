import React, { SVGProps } from "react";

const CommentIcon = ({ ...rest }: SVGProps<SVGSVGElement>) => {
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
      <path
        className="cls-637642e7c3a86d32eae6f1d2-1"
        d="M21.5,12A9.5,9.5,0,1,0,12,21.5h9.5l-2.66-2.92A9.43,9.43,0,0,0,21.5,12Z"
      ></path>
      <line
        className="cls-637642e7c3a86d32eae6f1d2-1"
        x1="14.85"
        y1="12"
        x2="16.75"
        y2="12"
      ></line>
      <line
        className="cls-637642e7c3a86d32eae6f1d2-1"
        x1="11.05"
        y1="12"
        x2="12.95"
        y2="12"
      ></line>
      <line
        className="cls-637642e7c3a86d32eae6f1d2-1"
        x1="7.25"
        y1="12"
        x2="9.15"
        y2="12"
      ></line>
    </svg>
  );
};

export default CommentIcon;
