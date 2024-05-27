import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayAdd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.752 14.222A10 10 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10c.764 0 1.508-.086 2.222-.248M19 16v6m3-3h-6m-1.683-8.342L11.17 9.085A1.5 1.5 0 0 0 9 10.427v3.146a1.5 1.5 0 0 0 2.17 1.342l3.147-1.573c1.105-.553 1.105-2.13 0-2.684Z"
    />
  </svg>
);
export default SvgPlayAdd;
