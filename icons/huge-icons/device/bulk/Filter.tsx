import * as React from "react";
import type { SVGProps } from "react";
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6M2.25 12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M17.25 12a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M10.25 18a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.75-.75M2.25 18a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M9 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0M19 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      opacity={0.4}
    />
  </svg>
);
export default SvgFilter;
