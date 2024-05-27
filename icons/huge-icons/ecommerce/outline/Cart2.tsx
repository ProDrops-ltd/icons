import * as React from "react";
import type { SVGProps } from "react";
const SvgCart2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 4h12a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4zm0 0a2 2 0 0 0-2-2H2"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M11 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM20 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 12c2.356 1.34 3.648 1.326 6 0"
    />
  </svg>
);
export default SvgCart2;
