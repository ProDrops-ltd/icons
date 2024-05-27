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
      d="M6 11a4 4 0 1 1 0-8h12a4 4 0 0 1 0 8m0-4v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7z"
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
