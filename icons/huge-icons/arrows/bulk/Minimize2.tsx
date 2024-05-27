import * as React from "react";
import type { SVGProps } from "react";
const SvgMinimize2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 22H6a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M18 12h-2a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.81 16.25H12a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 1.5 0v3.19l5.72-5.72a.75.75 0 1 1 1.06 1.06z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMinimize2;
