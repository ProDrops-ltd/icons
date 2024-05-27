import * as React from "react";
import type { SVGProps } from "react";
const SvgDonateCoin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 8H2v9l4.31 2.155A8 8 0 0 0 9.89 20H18a2 2 0 1 0 0-4h-1.584c-.931 0-1.85-.217-2.683-.633l-2.941-1.471a1.911 1.911 0 0 0-.53-3.156z"
      opacity={0.4}
    />
    <circle cx={18} cy={8} r={4} fill="currentColor" />
  </svg>
);
export default SvgDonateCoin;
