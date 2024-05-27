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
      fill="currentColor"
      d="M4 20V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14zM14 20v-8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.25 20a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlignBottom;
