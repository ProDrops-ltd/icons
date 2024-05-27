import * as React from "react";
import type { SVGProps } from "react";
const SvgClipboard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 2a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4zM6.5 4.031A4 4 0 0 0 3 8.001v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V8a4 4 0 0 0-3.5-3.97 3.5 3.5 0 0 1-3.5 3.47h-4a3.5 3.5 0 0 1-3.5-3.47M7.25 10A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8 13.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zM7.25 18a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClipboard;
