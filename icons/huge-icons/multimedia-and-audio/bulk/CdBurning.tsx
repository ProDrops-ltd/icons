import * as React from "react";
import type { SVGProps } from "react";
const SvgCdBurning = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20 12a6.125 6.125 0 0 1-6.125 6.125H13V14.25h.75a2.25 2.25 0 0 0 0-4.5H13V5.875h.875A6.125 6.125 0 0 1 20 12"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCdBurning;
