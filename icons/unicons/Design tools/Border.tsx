import * as React from "react";
import type { SVGProps } from "react";
const SvgBorder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-9 16H5v-6h6zm0-8H5V5h6zm8 8h-6v-6h6zm0-8h-6V5h6z"
    />
  </svg>
);
export default SvgBorder;
