import * as React from "react";
import type { SVGProps } from "react";
const SvgTrolley = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M7 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 18V4a2 2 0 0 0-2-2H2M7 20h15M13 8h2"
    />
  </svg>
);
export default SvgTrolley;
