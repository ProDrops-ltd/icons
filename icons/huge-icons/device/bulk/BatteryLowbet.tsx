import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryLowbet = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M8 22h8a2 2 0 0 0 2-2v-2L6 6v14a2 2 0 0 0 2 2"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBatteryLowbet;
