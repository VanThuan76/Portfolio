import React, { SVGProps } from "react";

interface LanguageIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
}

const LanguageIcon = ({
  color = "#000000",
  size = 24,
  ...rest
}: LanguageIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      {...rest}
    >
      <defs>
        <style>
          {`.cls-icon { fill:none; stroke:${color}; stroke-miterlimit:10; }`}
        </style>
      </defs>
      <line className="cls-icon" x1="0.5" y1="3.35" x2="12" y2="3.35" />
      <line className="cls-icon" x1="6.25" y1="0.48" x2="6.25" y2="3.35" />
      <path className="cls-icon" d="M9.12,3.35c0,3.52-3.28,8.2-7.66,10.55" />
      <path className="cls-icon" d="M4.51,7.37A16.4,16.4,0,0,0,11,13.9" />
      <polyline
        className="cls-icon"
        points="12.96 22.52 16.79 11.98 17.75 11.98 21.58 22.52"
      />
      <line className="cls-icon" x1="20.43" y1="18.69" x2="15.07" y2="18.69" />
      <line className="cls-icon" x1="11.04" y1="22.52" x2="14.88" y2="22.52" />
      <line className="cls-icon" x1="19.67" y1="22.52" x2="23.5" y2="22.52" />
    </svg>
  );
};

export default LanguageIcon;
