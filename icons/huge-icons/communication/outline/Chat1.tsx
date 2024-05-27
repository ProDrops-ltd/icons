import * as React from "react";
import type { SVGProps } from "react";
const SvgChat1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 3h-2a9 9 0 0 0-9 9v5a4 4 0 0 0 4 4h7a9 9 0 1 0 0-18Z"
    />
    <circle cx={12} cy={12} r={1} fill="currentColor" />
    <circle cx={16} cy={12} r={1} fill="currentColor" />
    <circle cx={8} cy={12} r={1} fill="currentColor" />
  </svg>
);
export default SvgChat1;
