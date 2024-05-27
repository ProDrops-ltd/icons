import * as React from "react";
import type { SVGProps } from "react";
const SvgProjector = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 4a4 4 0 0 1 4 4v6a4 4 0 0 1-2.25 3.598V19a.75.75 0 0 1-1.5 0v-1.008A4 4 0 0 1 18 18H6a4 4 0 0 1-.25-.008V19a.75.75 0 0 1-1.5 0v-1.402A4 4 0 0 1 2 14V8a4 4 0 0 1 4-4zm0 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6 8.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zM5.25 13a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M15 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgProjector;
