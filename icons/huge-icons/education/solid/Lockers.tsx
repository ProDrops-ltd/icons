import * as React from "react";
import type { SVGProps } from "react";
const SvgLockers = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.25 2H5a3 3 0 0 0-3 3v1.25h9.25zM2 17V7.75h9.25V20h-5.5v2a.75.75 0 0 1-1.5 0v-2q0-.048.006-.093A3 3 0 0 1 2 17m10.75 3V7.75H22V17c0 1.4-.959 2.576-2.256 2.907a1 1 0 0 1 .006.093v2a.75.75 0 0 1-1.5 0v-2zM22 5v1.25h-9.25V2H19a3 3 0 0 1 3 3M8.25 14a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0zm6.75.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLockers;
