import * as React from "react";
import type { SVGProps } from "react";
const SvgCart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 2a.75.75 0 0 1 .75-.75h2A2.75 2.75 0 0 1 7.5 4H18c1.953 0 3.579 1.4 3.93 3.25H6V4c0-.69-.56-1.25-1.25-1.25h-2A.75.75 0 0 1 2 2m7.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6 8.75h16V13a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCart;
