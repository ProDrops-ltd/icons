import * as React from "react";
import type { SVGProps } from "react";
const SvgMoney1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.25 7A.75.75 0 0 1 5 6.25h2a.75.75 0 0 1 0 1.5H5A.75.75 0 0 1 4.25 7M16.25 17a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <circle cx={12} cy={12} r={2} fill="currentColor" />
  </svg>
);
export default SvgMoney1;
