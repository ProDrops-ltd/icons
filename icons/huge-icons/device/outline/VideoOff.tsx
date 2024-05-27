import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m1.75 2 20 20M1.75 2l3.101 3.101M15.75 12V9.333l2.671-2.374c1.29-1.147 3.329-.231 3.329 1.495v7.092c0 .705-.34 1.275-.83 1.624M15.75 10V9a4 4 0 0 0-4-4h-3m-3.899.101A4 4 0 0 0 1.75 9v6a4 4 0 0 0 4 4h6c1.9 0 3.49-1.325 3.899-3.101z"
    />
  </svg>
);
export default SvgVideoOff;
