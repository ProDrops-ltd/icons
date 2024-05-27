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
    <circle
      cx={3}
      cy={3}
      r={3}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 9 12)"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M18.999 21.874A4 4 0 0 0 22 18V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v12a4 4 0 0 0 3.001 3.874m13.998 0Q18.519 22 18 22H6q-.519-.002-.999-.126m13.998 0a7 7 0 0 0-13.998 0"
    />
  </svg>
);
export default SvgUserRectangle;
