import * as React from "react";
import type { SVGProps } from "react";
const SvgLowerLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 16H9.41l8.3-8.29a1.004 1.004 0 0 0-1.42-1.42L8 14.59V7a1 1 0 0 0-2 0v10a1 1 0 0 0 .08.38 1 1 0 0 0 .54.54c.12.051.25.079.38.08h10a1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgLowerLeft;
