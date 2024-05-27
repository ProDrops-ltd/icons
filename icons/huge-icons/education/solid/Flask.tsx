import * as React from "react";
import type { SVGProps } from "react";
const SvgFlask = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 1.25a.75.75 0 0 0 0 1.5h1v5.54a7.02 7.02 0 0 0-3.912 2.96h11.824A7.02 7.02 0 0 0 14 8.29V2.75h1a.75.75 0 0 0 0-1.5zM5 15c0-.787.13-1.544.37-2.25h13.26A7 7 0 1 1 5 15"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFlask;
