import * as React from "react";
import type { SVGProps } from "react";
const SvgTimeQuarterPast = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 12c0-5.523-4.477-10-10-10"
    />
    <path
      stroke="currentColor"
      strokeDasharray="0.5 3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.5 12H16m-4-6v4.5"
    />
  </svg>
);
export default SvgTimeQuarterPast;
