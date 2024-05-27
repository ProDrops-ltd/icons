import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 2v20M4 4h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4zm0 10h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4z"
    />
  </svg>
);
export default SvgAlignLeft;
