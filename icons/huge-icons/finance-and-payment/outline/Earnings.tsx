import * as React from "react";
import type { SVGProps } from "react";
const SvgEarnings = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle
      cx={2}
      cy={2}
      r={2}
      stroke="currentColor"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 14 18)"
    />
    <circle
      cx={2}
      cy={2}
      r={2}
      stroke="currentColor"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 6 10)"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 4h4a2 2 0 0 1 2 2v4M19 5 4 20"
    />
  </svg>
);
export default SvgEarnings;
