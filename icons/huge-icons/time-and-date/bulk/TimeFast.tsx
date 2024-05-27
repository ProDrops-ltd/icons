import * as React from "react";
import type { SVGProps } from "react";
const SvgTimeFast = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 5.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75m-.97 7.72a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.25 22a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75M15.25 19a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75M17.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTimeFast;
