import * as React from "react";
import type { SVGProps } from "react";
const SvgAssignment = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 21h-2a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v7M2 7h3m7 0h6m-6 4h6m-6 4h3m1 4 1.753 1.402a1 1 0 0 0 1.377-.122L22 17M3.5 21l.7-.933a4 4 0 0 0 .8-2.4V4.5a1.5 1.5 0 1 0-3 0v13.167a4 4 0 0 0 .8 2.4z"
    />
  </svg>
);
export default SvgAssignment;
