import * as React from "react";
import type { SVGProps } from "react";
const SvgLoudspeaker = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M4 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M16 15a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
    <circle
      cx={1}
      cy={1}
      r={1}
      fill="currentColor"
      transform="matrix(1 0 0 -1 11 16)"
    />
    <path
      fill="currentColor"
      d="M13.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </svg>
);
export default SvgLoudspeaker;
