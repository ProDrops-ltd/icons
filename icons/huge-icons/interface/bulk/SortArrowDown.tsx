import * as React from "react";
import type { SVGProps } from "react";
const SvgSortArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.25 17c0 .414.336.75.75.75h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0-.75.75M11.25 11c0 .414.336.75.75.75h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0-.75.75M11.25 5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.146 17.736a.8.8 0 0 1-.292 0 2.74 2.74 0 0 1-1.91-.92L2.44 15.124a.75.75 0 0 1 1.122-.996l1.505 1.693q.085.095.184.17V5a.75.75 0 0 1 1.5 0v10.99a1.3 1.3 0 0 0 .184-.17l1.505-1.693a.75.75 0 0 1 1.122.996l-1.506 1.694a2.74 2.74 0 0 1-1.909.919"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSortArrowDown;
