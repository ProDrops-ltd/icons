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
      d="M22 12a9.98 9.98 0 0 1-3.441 7.549A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-6.559-2.451A9.98 9.98 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10"
      opacity={0.4}
    />
    <circle cx={12} cy={10} r={3} fill="currentColor" />
    <path
      fill="currentColor"
      d="M18.559 19.549a7.003 7.003 0 0 0-13.118 0A9.96 9.96 0 0 0 12 22c2.51 0 4.803-.924 6.559-2.451"
    />
  </svg>
);
export default SvgUserCircle;
