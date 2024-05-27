import * as React from "react";
import type { SVGProps } from "react";
const SvgShareRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 16c0-4 4-6 8-6m0 0-2 3m2-3-3-2M6 22h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4"
    />
  </svg>
);
export default SvgShareRectangle;
