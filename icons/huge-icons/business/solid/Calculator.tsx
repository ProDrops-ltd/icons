import * as React from "react";
import type { SVGProps } from "react";
const SvgCalculator = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 22a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4zM7.25 6A.75.75 0 0 1 8 5.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6m1.5 4a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m4 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m3.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m-8 4a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m4 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m4.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-8 4a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m4 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m3.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCalculator;
