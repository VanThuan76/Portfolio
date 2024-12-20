import React, { SVGProps } from "react";

const PatternBackground = ({ ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <defs>
        <pattern
          id="pattern-9"
          patternUnits="userSpaceOnUse"
          width="12"
          height="12"
        >
          <path
            d="M0,0 l12,12 M12,0 l-12,12"
            stroke="currentcolor"
            style={{ stroke: "var(--pattern-channel-1, currentcolor)" }}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pattern-9)" />
    </svg>
  );
};

export default PatternBackground;
