import * as React from "react";
import type { SVGProps } from "react";
const SvgWithdraw = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 11V7H6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zm0 0a4 4 0 0 0 0-8H6a4 4 0 1 0 0 8"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m14 15-1.293 1.293a1 1 0 0 1-1.414 0L10 15m2-4v5"
    />
  </svg>
);
export default SvgWithdraw;
