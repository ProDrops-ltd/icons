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
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 2h4M3 3l18 18"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.598 4.66A2.74 2.74 0 0 0 5.25 6v14A2.75 2.75 0 0 0 8 22.75h8A2.75 2.75 0 0 0 18.75 20v-2.19l-1.5-1.5V20c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25V6q0-.09.012-.177zm11.652 9.53V6c0-.69-.56-1.25-1.25-1.25H8q-.09 0-.177.012L6.66 3.598A2.74 2.74 0 0 1 8 3.25h8A2.75 2.75 0 0 1 18.75 6v9.69z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBatteryLowbet;
