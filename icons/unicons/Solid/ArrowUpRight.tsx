import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 6H7c-.6 0-1 .4-1 1s.4 1 1 1h7.6l-8.3 8.3c-.4.4-.4 1 0 1.4s1 .4 1.4 0L16 9.4V17c0 .6.4 1 1 1s1-.4 1-1V7c0-.6-.4-1-1-1"
    />
  </svg>
);
export default SvgArrowUpRight;
