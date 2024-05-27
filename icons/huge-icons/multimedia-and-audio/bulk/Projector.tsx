import * as React from "react";
import type { SVGProps } from "react";
const SvgProjector = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5 17.86.75.134v1.294c0 .255-.336.462-.75.462s-.75-.207-.75-.462v-1.692zM19 19.75c-.414 0-.75-.207-.75-.462v-1.3l.825-.142.675-.25v1.692c0 .255-.336.462-.75.462"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M18 4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M5.25 8A.75.75 0 0 1 6 7.25h3a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8M5.25 14a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgProjector;
