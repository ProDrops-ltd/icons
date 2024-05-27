import * as React from "react";
import type { SVGProps } from "react";
const SvgReport = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm6.25 2a2.75 2.75 0 1 1 5.5 0v4a.75.75 0 0 1-1.5 0v-1.25h-2.5V12a.75.75 0 0 1-1.5 0V8m4 1.25V8a1.25 1.25 0 1 0-2.5 0v1.25zm-6 5.75a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8 17.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgReport;
