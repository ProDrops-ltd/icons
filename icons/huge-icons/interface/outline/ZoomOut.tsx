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
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m21 21-1.5-1.5M17 15h-4m-4.375 6H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v1.625M21 15a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
    />
  </svg>
);
export default SvgZoomOut;
