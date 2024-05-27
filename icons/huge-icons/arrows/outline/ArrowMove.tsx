import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowMove = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15 18-3 3m0 0-3-3m3 3V3m0 0 3 3m-3-3L9 6M6 15l-3-3m0 0 3-3m-3 3h18m0 0-3 3m3-3-3-3"
    />
  </svg>
);
export default SvgArrowMove;
