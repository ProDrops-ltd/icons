import * as React from "react";
import type { SVGProps } from "react";
const SvgOut = (props: SVGProps<SVGSVGElement>) => (
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
      d="m18 9 3 3m0 0-3 3m3-3H9M15 7.5V7a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-.5"
    />
  </svg>
);
export default SvgOut;
