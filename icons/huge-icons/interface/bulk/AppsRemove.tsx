import * as React from "react";
import type { SVGProps } from "react";
const SvgAppsRemove = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.577 3.615a2 2 0 0 1 2-2H8.5a2 2 0 0 1 2 2v4.923a2 2 0 0 1-2 2H3.577a2 2 0 0 1-2-2zM13.5 15.538a2 2 0 0 1 2-2h4.923a2 2 0 0 1 2 2v4.924a2 2 0 0 1-2 2H15.5a2 2 0 0 1-2-2z"
      opacity={0.4}
    />
    <circle cx={6.038} cy={18} r={4.462} fill="currentColor" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14 6a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 14 6"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAppsRemove;
