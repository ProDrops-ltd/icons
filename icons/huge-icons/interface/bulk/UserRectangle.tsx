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
      fill="currentColor"
      d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12q.519-.002.999-.126A4 4 0 0 0 22 18V6a4 4 0 0 0-4-4"
      opacity={0.4}
    />
    <circle
      cx={3}
      cy={3}
      r={3}
      fill="currentColor"
      transform="matrix(1 0 0 -1 9 13)"
    />
    <path
      fill="currentColor"
      d="M6 22h12q.519-.002.999-.126a7 7 0 0 0-13.998 0Q5.481 22 6 22"
    />
  </svg>
);
export default SvgUserRectangle;
