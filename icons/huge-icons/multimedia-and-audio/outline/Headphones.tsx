import * as React from "react";
import type { SVGProps } from "react";
const SvgHeadphones = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 16v2a3 3 0 1 1-6 0v-2a3 3 0 1 1 6 0Zm0 0v-4a9 9 0 1 0-18 0v4m0 0v2a3 3 0 1 0 6 0v-2a3 3 0 1 0-6 0Z"
    />
  </svg>
);
export default SvgHeadphones;
