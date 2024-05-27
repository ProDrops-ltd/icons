import * as React from "react";
import type { SVGProps } from "react";
const SvgCardAdd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z"
      opacity={0.4}
    />
    <circle cx={6} cy={17} r={1} fill="currentColor" />
    <path fill="currentColor" d="M2 7h20v4H2z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19 14.25a.75.75 0 0 1 .75.75v2.25H22a.75.75 0 0 1 0 1.5h-2.25V21a.75.75 0 0 1-1.5 0v-2.25H16a.75.75 0 0 1 0-1.5h2.25V15a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCardAdd;
