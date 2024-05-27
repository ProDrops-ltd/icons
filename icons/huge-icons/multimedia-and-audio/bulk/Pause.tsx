import * as React from "react";
import type { SVGProps } from "react";
const SvgPause = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" opacity={0.4}>
      <path d="M4 7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM14 7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
    </g>
  </svg>
);
export default SvgPause;
