import * as React from "react";
import type { SVGProps } from "react";
const SvgUserRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 18c-1.481-1.274-3.186-2-5-2s-3.519.726-5 2"
    />
    <circle
      cx={3}
      cy={3}
      r={3}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 9 13)"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z"
    />
  </svg>
);
export default SvgUserRectangle;
