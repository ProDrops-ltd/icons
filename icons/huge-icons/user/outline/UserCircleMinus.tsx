import * as React from "react";
import type { SVGProps } from "react";
const SvgUserCircleMinus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 15c2.946-1.32 4.7-1.347 8 0"
    />
    <circle
      cx={3}
      cy={3}
      r={3}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 8 11)"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.395 14.25A9 9 0 1 0 13 19.777"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M20 18h-4"
    />
  </svg>
);
export default SvgUserCircleMinus;
