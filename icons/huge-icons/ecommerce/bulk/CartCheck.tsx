import * as React from "react";
import type { SVGProps } from "react";
const SvgCartCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.75 1.25a.75.75 0 0 0 0 1.5h2C5.44 2.75 6 3.31 6 4h1.5a2.75 2.75 0 0 0-2.75-2.75z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M6 4h12a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <circle cx={9.5} cy={20.5} r={1.5} fill="currentColor" />
    <circle cx={18.5} cy={20.5} r={1.5} fill="currentColor" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.494 8.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.753-1.402a.75.75 0 0 1 .938-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCartCheck;
