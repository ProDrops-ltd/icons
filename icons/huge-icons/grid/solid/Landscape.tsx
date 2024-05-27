import * as React from "react";
import type { SVGProps } from "react";
const SvgLandscape = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.75 5a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75M18 7a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3zm0 12.75a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLandscape;
