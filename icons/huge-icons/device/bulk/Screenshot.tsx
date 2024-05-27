import * as React from "react";
import type { SVGProps } from "react";
const SvgScreenshot = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.25 5A2.75 2.75 0 0 1 5 2.25h4a.75.75 0 0 1 0 1.5H5c-.69 0-1.25.56-1.25 1.25v4a.75.75 0 0 1-1.5 0zM21.75 19A2.75 2.75 0 0 1 19 21.75h-4a.75.75 0 0 1 0-1.5h4c.69 0 1.25-.56 1.25-1.25v-4a.75.75 0 0 1 1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgScreenshot;
