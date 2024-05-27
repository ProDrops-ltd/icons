import * as React from "react";
import type { SVGProps } from "react";
const SvgFileMinus1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 6v12a4 4 0 0 0 4 4h6l8-8V6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4"
      opacity={0.4}
    />
    <path fill="currentColor" d="M13 18v4l8-8h-4a4 4 0 0 0-4 4" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 9"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFileMinus1;
