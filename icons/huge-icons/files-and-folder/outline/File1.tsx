import * as React from "react";
import type { SVGProps } from "react";
const SvgFile1 = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M7 22a4 4 0 0 0 3.877-3.01c.136-.535.57-.99 1.123-.99h7M7 22a4 4 0 0 1-4-4V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v13M7 22h12a4 4 0 0 0 3.877-3.01c.136-.535-.325-.99-.877-.99h-3M15 7H7m4 5H7"
    />
  </svg>
);
export default SvgFile1;
