import * as React from "react";
import type { SVGProps } from "react";
const SvgMatrix = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 1.25a.75.75 0 0 1 0 1.5H6A3.25 3.25 0 0 0 2.75 6v12A3.25 3.25 0 0 0 6 21.25h2a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 18V6A4.75 4.75 0 0 1 6 1.25zm7.25.75a.75.75 0 0 1 .75-.75h2A4.75 4.75 0 0 1 22.75 6v12A4.75 4.75 0 0 1 18 22.75h-2a.75.75 0 0 1 0-1.5h2A3.25 3.25 0 0 0 21.25 18V6A3.25 3.25 0 0 0 18 2.75h-2a.75.75 0 0 1-.75-.75M7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMatrix;
