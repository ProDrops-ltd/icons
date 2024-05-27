import * as React from "react";
import type { SVGProps } from "react";
const SvgUserCircle = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M22 12a9.98 9.98 0 0 1-3.441 7.549A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-6.559-2.451A9.98 9.98 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10m-10 7a6.97 6.97 0 0 0 5-2.101C15.92 15.15 14.083 14 12 14s-3.92 1.15-5 2.899q.196.2.409.385A6.97 6.97 0 0 0 12 19m0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUserCircle;
