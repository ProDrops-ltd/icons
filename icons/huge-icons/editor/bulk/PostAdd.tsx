import * as React from "react";
import type { SVGProps } from "react";
const SvgPostAdd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 18V6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.25 7A.75.75 0 0 1 8 6.25h4a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M7.25 17a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M18 1.25a.75.75 0 0 1 .75.75v2.25H21a.75.75 0 0 1 0 1.5h-2.25V8a.75.75 0 0 1-1.5 0V5.75H15a.75.75 0 0 1 0-1.5h2.25V2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPostAdd;
