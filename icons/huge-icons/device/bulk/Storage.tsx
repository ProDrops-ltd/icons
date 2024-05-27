import * as React from "react";
import type { SVGProps } from "react";
const SvgStorage = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 2a4 4 0 0 1 4 4v6H2V6a4 4 0 0 1 4-4z"
      opacity={0.4}
    />
    <path fill="currentColor" d="M6 22a4 4 0 0 1-4-4v-6h20v6a4 4 0 0 1-4 4z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18 5.25a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0V6a.75.75 0 0 1 .75-.75M14 5.25a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0V6a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18 15.25a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0v-2a.75.75 0 0 1 .75-.75M14 15.25a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0v-2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgStorage;
