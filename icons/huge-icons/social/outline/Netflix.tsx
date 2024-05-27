import * as React from "react";
import type { SVGProps } from "react";
const SvgNetflix = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 3.84v16.32h5v-9.12M20 20.16V3.84h-5v8.64"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 3.84h5l11 16.32h-5z"
    />
  </svg>
);
export default SvgNetflix;
