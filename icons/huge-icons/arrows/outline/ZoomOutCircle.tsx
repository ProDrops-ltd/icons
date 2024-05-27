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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M13 8h3m0 0v3m0-3-8 8m0 0v-3m0 3h3"
    />
  </svg>
);
export default SvgZoomOutCircle;
