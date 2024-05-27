import * as React from "react";
import type { SVGProps } from "react";
const SvgFilter1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.25 7A.75.75 0 0 1 3 6.25h5a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 7M17.25 7a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M15.25 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75M2.25 17a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M16 4h-2a3 3 0 1 0 0 6h2a3 3 0 1 0 0-6M10 14H8a3 3 0 1 0 0 6h2a3 3 0 1 0 0-6"
    />
  </svg>
);
export default SvgFilter1;
