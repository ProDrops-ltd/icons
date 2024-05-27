import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeLink = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.05 4.05 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.177 8.934a2.75 2.75 0 0 1 3.889 3.89l-.354.353a.75.75 0 1 1-1.06-1.06l.353-.354a1.25 1.25 0 1 0-1.767-1.768l-1.415 1.414a1.25 1.25 0 0 0 0 1.768l-1.06 1.06a2.75 2.75 0 0 1 0-3.889z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.823 17.066a2.75 2.75 0 1 1-3.889-3.89l.354-.353a.75.75 0 0 1 1.06 1.06l-.353.354a1.25 1.25 0 0 0 1.768 1.768l1.414-1.414a1.25 1.25 0 0 0 0-1.768l1.06-1.06a2.75 2.75 0 0 1 0 3.889z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHomeLink;
