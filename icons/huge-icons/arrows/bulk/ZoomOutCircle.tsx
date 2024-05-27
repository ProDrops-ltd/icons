import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomOutCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13 8.75a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V9.81l-5.44 5.44H11a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.19l5.44-5.44z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgZoomOutCircle;
