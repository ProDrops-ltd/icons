import * as React from "react";
import type { SVGProps } from "react";
const SvgMailBlock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={18} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} />
    <path stroke="currentColor" strokeWidth={1.5} d="m15 3 6 6" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.75 13 2.2 1.65a3 3 0 0 0 3.6 0l2.2-1.65"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.75 11.954V19A3.75 3.75 0 0 1 15 22.75H5A3.75 3.75 0 0 1 1.25 19v-8A3.75 3.75 0 0 1 5 7.25h7.13c.112.53.294 1.032.536 1.5H5A2.25 2.25 0 0 0 2.75 11v8A2.25 2.25 0 0 0 5 21.25h10A2.25 2.25 0 0 0 17.25 19v-7.046a6 6 0 0 0 1.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMailBlock;
