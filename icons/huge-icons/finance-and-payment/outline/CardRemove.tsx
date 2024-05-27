import * as React from "react";
import type { SVGProps } from "react";
const SvgCardRemove = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 21H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6"
    />
    <circle cx={6} cy={17} r={1} fill="currentColor" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.121 15.879 16.88 20.12M21.121 20.121 16.88 15.88M2 7h20v4H2z"
    />
  </svg>
);
export default SvgCardRemove;
