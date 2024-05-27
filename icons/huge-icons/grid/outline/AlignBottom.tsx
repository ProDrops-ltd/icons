import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignBottom = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 20h20M4 20V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14zm10 0v-8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8z"
    />
  </svg>
);
export default SvgAlignBottom;
