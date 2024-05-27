import * as React from "react";
import type { SVGProps } from "react";
const SvgTextRotationNone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 11h6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7 15 5-12 5 12M18 21l2-2m0 0-2-2m2 2H4"
    />
  </svg>
);
export default SvgTextRotationNone;
