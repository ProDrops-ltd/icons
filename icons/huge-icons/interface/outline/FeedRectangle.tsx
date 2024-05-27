import * as React from "react";
import type { SVGProps } from "react";
const SvgFeedRectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M8.5 17a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6 11a8.075 8.075 0 0 1 7 7M6 6c6.627 0 12 5.373 12 12M6 22h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4Z"
    />
  </svg>
);
export default SvgFeedRectangle;
