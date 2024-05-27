import * as React from "react";
import type { SVGProps } from "react";
const SvgProtractor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 2h2a2 2 0 0 1 2 2 8 8 0 1 1 0 16 2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m7 10a3 3 0 0 1-3 3V9a3 3 0 0 1 3 3"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M5 5.25h2a.75.75 0 0 1 0 1.5H5zM5 9.25h2a.75.75 0 0 1 0 1.5H5zM5 13.25h2a.75.75 0 0 1 0 1.5H5zM5 17.25h2a.75.75 0 0 1 0 1.5H5z"
    />
  </svg>
);
export default SvgProtractor;
