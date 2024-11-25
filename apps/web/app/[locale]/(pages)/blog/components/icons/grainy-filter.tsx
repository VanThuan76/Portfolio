import React, { SVGProps } from "react";

const GrainyFilter = ({ ...rest }: SVGProps<SVGSVGElement>) => (
  <svg width="100" height="100" {...rest}>
    <filter id="grainy">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.65"
        numOctaves="2"
        stitchTiles="stitch"
      />
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.5" />
      </feComponentTransfer>
      <feColorMatrix type="saturate" values="0" />
      <feBlend mode="multiply" in2="SourceGraphic" />
    </filter>
  </svg>
);

export default GrainyFilter;
