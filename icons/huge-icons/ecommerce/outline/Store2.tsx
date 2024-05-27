import * as React from "react";
import type { SVGProps } from "react";
const SvgStore2 = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 8.25V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2.25C2 10.321 3.492 12 5.333 12s3.334-1.679 3.334-3.75C8.667 10.321 10.159 12 12 12c1.84 0 3.333-1.679 3.333-3.75 0 2.071 1.493 3.75 3.334 3.75S22 10.321 22 8.25Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 18c2.356 1.34 3.648 1.326 6 0"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 11v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-7"
    />
  </svg>
);
export default SvgStore2;
