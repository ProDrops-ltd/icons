import * as React from "react";
import type { SVGProps } from "react";
const SvgReplay = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a9.99 9.99 0 0 1 8 3.999L21 3m-6.683 7.658L11.17 9.085A1.5 1.5 0 0 0 9 10.427v3.146a1.5 1.5 0 0 0 2.17 1.342l3.147-1.573c1.105-.553 1.105-2.13 0-2.684"
    />
  </svg>
);
export default SvgReplay;
