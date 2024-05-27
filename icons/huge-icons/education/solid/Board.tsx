import * as React from "react";
import type { SVGProps } from "react";
const SvgBoard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 3a4 4 0 0 0-4 4v9.25H2a.75.75 0 0 0 0 1.5h9.25v2.5H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-2.5H22a.75.75 0 0 0 0-1.5h-1V7a4 4 0 0 0-4-4zm9 5.75a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0 0 1.5zM12.75 12a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBoard;
