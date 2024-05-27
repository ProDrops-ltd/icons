import * as React from "react";
import type { SVGProps } from "react";
const SvgUnderline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 20h14M7 4v7a5 5 0 0 0 5 5v0a5 5 0 0 0 5-5V4"
    />
  </svg>
);
export default SvgUnderline;
