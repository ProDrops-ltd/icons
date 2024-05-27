import * as React from "react";
import type { SVGProps } from "react";
const SvgHelp2 = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 9a3 3 0 1 1 3.982 2.836c-.522.18-.982.612-.982 1.164v1m10-2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
    <circle cx={12} cy={17} r={1} fill="currentColor" />
  </svg>
);
export default SvgHelp2;
