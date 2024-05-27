import * as React from "react";
import type { SVGProps } from "react";
const SvgCoinEuro = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16 9.2A4.11 4.11 0 0 0 13.083 8C10.828 8 9 9.79 9 12s1.828 4 4.083 4c1.143 0 2.176-.46 2.917-1.2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 13.5h5M8 10.5h5"
    />
  </svg>
);
export default SvgCoinEuro;
