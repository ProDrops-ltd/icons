import * as React from "react";
import type { SVGProps } from "react";
const SvgCam = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 17v-1a4 4 0 0 1 8 0v1m5-8A9 9 0 1 1 3 9m.5 0h17a1.5 1.5 0 0 0 0-3h-17a1.5 1.5 0 1 0 0 3Z"
    />
    <circle
      cx={1}
      cy={1}
      r={1}
      fill="currentColor"
      transform="matrix(1 0 0 -1 11 16)"
    />
  </svg>
);
export default SvgCam;
