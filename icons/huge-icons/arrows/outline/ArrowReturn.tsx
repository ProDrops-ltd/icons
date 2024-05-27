import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowReturn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 8H9a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h10m0-8-4-3m4 3-4 3"
    />
  </svg>
);
export default SvgArrowReturn;
