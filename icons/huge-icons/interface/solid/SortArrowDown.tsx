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
      d="M6 17.75q.075 0 .146-.014a2.74 2.74 0 0 0 1.91-.92l1.505-1.693a.75.75 0 1 0-1.122-.996L6.934 15.82a1.3 1.3 0 0 1-.184.17V5a.75.75 0 0 0-1.5 0v10.99a1.3 1.3 0 0 1-.184-.17L3.56 14.127a.75.75 0 0 0-1.122.996l1.506 1.694a2.74 2.74 0 0 0 1.909.919A1 1 0 0 0 6 17.75M11.25 5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m.75 6.75a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 0 1.5zm0 6a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSortArrowDown;
