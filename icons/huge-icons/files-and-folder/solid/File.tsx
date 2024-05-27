import * as React from "react";
import type { SVGProps } from "react";
const SvgFile = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h15a2 2 0 0 1-2-2V5a3 3 0 0 0-3-3M5.25 7A.75.75 0 0 1 6 6.25h8a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 7M6 11.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zM5.25 17a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M22 19.25V10a2 2 0 0 0-2-2h-.5v11.25a1.25 1.25 0 1 0 2.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFile;
