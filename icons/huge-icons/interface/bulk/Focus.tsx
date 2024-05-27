import * as React from "react";
import type { SVGProps } from "react";
const SvgFocus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.25 6A4.75 4.75 0 0 1 6 1.25h1.556a.75.75 0 0 1 0 1.5H6A3.25 3.25 0 0 0 2.75 6v1.556a.75.75 0 0 1-1.5 0zm14.444-4a.75.75 0 0 1 .75-.75H18A4.75 4.75 0 0 1 22.75 6v1.556a.75.75 0 0 1-1.5 0V6A3.25 3.25 0 0 0 18 2.75h-1.556a.75.75 0 0 1-.75-.75M2 15.694a.75.75 0 0 1 .75.75V18A3.25 3.25 0 0 0 6 21.25h1.556a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 18v-1.556a.75.75 0 0 1 .75-.75m20 0a.75.75 0 0 1 .75.75V18A4.75 4.75 0 0 1 18 22.75h-1.556a.75.75 0 0 1 0-1.5H18A3.25 3.25 0 0 0 21.25 18v-1.556a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <circle cx={12} cy={12} r={5} fill="currentColor" />
  </svg>
);
export default SvgFocus;
