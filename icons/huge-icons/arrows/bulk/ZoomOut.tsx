import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomOut = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.5 6.75a.75.75 0 0 1 0-1.5H18a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V7.81l-4.72 4.72-1.06-1.06 4.72-4.72z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M10.627 17.123a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 1 1 1.5 0v2.689l4.72-4.72 1.06 1.06-4.719 4.72z"
    />
  </svg>
);
export default SvgZoomOut;
