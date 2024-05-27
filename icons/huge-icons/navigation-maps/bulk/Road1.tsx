import * as React from "react";
import type { SVGProps } from "react";
const SvgRoad1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.25 12a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75M18.75 12a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75M7.75 12a.75.75 0 0 0-.75-.75H6a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRoad1;
