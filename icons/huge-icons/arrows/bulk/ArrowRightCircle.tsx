import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.53 12.53a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8a.75.75 0 0 0 0 1.5h6.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowRightCircle;
