import * as React from "react";
import type { SVGProps } from "react";
const SvgCardUser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6"
    />
    <circle cx={6} cy={17} r={1} fill="currentColor" />
    <circle
      cx={2}
      cy={2}
      r={2}
      stroke="currentColor"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 17 19)"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 21c-.599-1.196-1.718-2-3-2s-2.401.804-3 2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 7h20v4H2z"
    />
  </svg>
);
export default SvgCardUser;
