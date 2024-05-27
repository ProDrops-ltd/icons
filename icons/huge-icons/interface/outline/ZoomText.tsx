import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomText = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22 20-1.5-1.5M7 14H2m5-5H2m13-5H2m20 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
    />
  </svg>
);
export default SvgZoomText;
