import * as React from "react";
import type { SVGProps } from "react";
const SvgFlask = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2h8M6 12h12M10 2h4v6.29a7 7 0 1 1-4 0z"
    />
  </svg>
);
export default SvgFlask;
