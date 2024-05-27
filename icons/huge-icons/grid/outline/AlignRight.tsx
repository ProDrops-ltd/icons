import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 2v20m0-18H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14zm0 10h-8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h8z"
    />
  </svg>
);
export default SvgAlignRight;
