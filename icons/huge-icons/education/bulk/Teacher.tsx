import * as React from "react";
import type { SVGProps } from "react";
const SvgTeacher = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 5v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.5 13.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.312 14.318a.75.75 0 0 1 .37.995c-.605 1.32-2.75 3.71-6.682 3.71-3.34 0-4.981 1.681-5.343 2.339a.75.75 0 1 1-1.314-.723C1.98 19.478 4.14 17.523 8 17.523c3.268 0 4.923-1.974 5.318-2.835a.75.75 0 0 1 .994-.37M11.25 7a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75M14.25 11a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTeacher;
