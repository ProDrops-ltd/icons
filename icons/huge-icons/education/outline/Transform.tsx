import * as React from "react";
import type { SVGProps } from "react";
const SvgTransform = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8 2H6a4 4 0 0 0-4 4v2m14-6h2a4 4 0 0 1 4 4v2m0 8v2a4 4 0 0 1-4 4h-2m-8 0H6a4 4 0 0 1-4-4v-2m15-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    />
  </svg>
);
export default SvgTransform;
