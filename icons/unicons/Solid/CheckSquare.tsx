import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 2H3c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1m-3.3 7.3-6.8 6.8c-.4.4-1 .4-1.4 0l-3.2-3.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.5 2.5 6.1-6.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4"
    />
  </svg>
);
export default SvgCheckSquare;
