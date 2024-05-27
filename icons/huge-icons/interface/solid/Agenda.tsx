import * as React from "react";
import type { SVGProps } from "react";
const SvgAgenda = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.75 2a.75.75 0 0 0-1.5 0v1.5h-6.5V2a.75.75 0 1 0-1.5 0v1.5H7a4 4 0 0 0-4 4V18a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7.5a4 4 0 0 0-4-4h-.25zM8 8.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM7.25 13a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8 16.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAgenda;
