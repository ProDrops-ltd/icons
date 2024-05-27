import * as React from "react";
import type { SVGProps } from "react";
const SvgUnlock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.184 4.376A3.25 3.25 0 0 1 15.25 6v2H16q.385 0 .75.07V6a4.75 4.75 0 0 0-8.864-2.376.75.75 0 1 0 1.298.752"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M4 12a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <circle cx={12} cy={15} r={2} fill="currentColor" />
  </svg>
);
export default SvgUnlock;
