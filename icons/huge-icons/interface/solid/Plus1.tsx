import * as React from "react";
import type { SVGProps } from "react";
const SvgPlus1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 18a2 2 0 1 0 4 0v-4h4a2 2 0 1 0 0-4h-4V6a2 2 0 1 0-4 0v4H6a2 2 0 1 0 0 4h4z"
    />
  </svg>
);
export default SvgPlus1;
