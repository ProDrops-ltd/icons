import * as React from "react";
import type { SVGProps } from "react";
const SvgChatDelay = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 3h-2a9 9 0 0 0-9 9v5a4 4 0 0 0 4 4h7a9 9 0 1 0 0-18m3 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-3.25-1.5a.75.75 0 0 0-1.5 0V12c0 .414.336.75.75.75h1.5a.75.75 0 0 0 0-1.5h-.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChatDelay;
