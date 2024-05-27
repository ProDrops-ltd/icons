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
      d="M10 6a2 2 0 1 1 4 0v12a2 2 0 1 1-4 0z"
      opacity={0.4}
    />
    <path fill="currentColor" d="M18 10a2 2 0 1 1 0 4H6a2 2 0 1 1 0-4z" />
  </svg>
);
export default SvgPlus1;
