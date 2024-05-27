import * as React from "react";
import type { SVGProps } from "react";
const SvgLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={10}
      height={16}
      x={18}
      y={7}
      fill="currentColor"
      opacity={0.4}
      rx={3}
      transform="rotate(90 18 7)"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21 4.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLeft;
