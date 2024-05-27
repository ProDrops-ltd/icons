import * as React from "react";
import type { SVGProps } from "react";
const SvgFiles = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6V5a3 3 0 0 0-3-3zm0 3.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zM4.25 9A.75.75 0 0 1 5 8.25h3a.75.75 0 0 1 0 1.5H5A.75.75 0 0 1 4.25 9M19 8h-6v14h6a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3m-3 3.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zM15.25 15a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFiles;
