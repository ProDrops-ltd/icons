import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneyYen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.55 6.4a.75.75 0 0 1 1.05.15l2.4 3.2 2.4-3.2a.75.75 0 0 1 1.2.9l-2.1 2.8H15a.75.75 0 1 1 0 1.5h-2.25v1.5H15a.75.75 0 1 1 0 1.5h-2.25V17a.75.75 0 1 1-1.5 0v-2.25H9a.75.75 0 1 1 0-1.5h2.25v-1.5H9a.75.75 0 1 1 0-1.5h1.5l-2.1-2.8a.75.75 0 0 1 .15-1.05"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMoneyYen;
