import * as React from "react";
import type { SVGProps } from "react";
const SvgBackpack = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 5V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1m2 5h2m-8 6c5.6-2.667 8.4-2.667 14 0M9 22h6a4 4 0 0 0 4-4v-7a6 6 0 0 0-6-6h-2a6 6 0 0 0-6 6v7a4 4 0 0 0 4 4m10-10v8h1a2 2 0 0 0 2-2v-3a3 3 0 0 0-3-3M5 12v8H4a2 2 0 0 1-2-2v-3a3 3 0 0 1 3-3"
    />
  </svg>
);
export default SvgBackpack;
