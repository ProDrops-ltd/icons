import * as React from "react";
import type { SVGProps } from "react";
const SvgCpu = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 1.25a.75.75 0 0 1 .75.75v2h-1.5V2a.75.75 0 0 1 .75-.75m4 0a.75.75 0 0 1 .75.75v2h-1.5V2a.75.75 0 0 1 .75-.75M1.25 10A.75.75 0 0 1 2 9.25h2v1.5H2a.75.75 0 0 1-.75-.75M20 9.25h2a.75.75 0 0 1 0 1.5h-2zM1.25 14a.75.75 0 0 1 .75-.75h2v1.5H2a.75.75 0 0 1-.75-.75M20 13.25h2a.75.75 0 0 1 0 1.5h-2zM10.75 20v2a.75.75 0 0 1-1.5 0v-2zm4 0v2a.75.75 0 0 1-1.5 0v-2z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <rect width={6} height={6} x={9} y={9} fill="currentColor" rx={2} />
  </svg>
);
export default SvgCpu;
