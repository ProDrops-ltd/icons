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
      fillRule="evenodd"
      d="M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2m-6.78.47a.75.75 0 0 1 1.06 0l2.666 2.665L18 16.94l3.53 3.53a.75.75 0 1 1-1.06 1.061L18 19.06V20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7.06L2.47 3.53a.75.75 0 0 1 0-1.06M8 4h8a2 2 0 0 1 2 2v8.94L7.22 4.157C7.459 4.056 7.723 4 8 4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBatteryLowbet;
