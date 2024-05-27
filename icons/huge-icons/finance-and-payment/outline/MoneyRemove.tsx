import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneyRemove = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 20H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v5"
    />
    <circle
      cx={1}
      cy={1}
      r={1}
      fill="currentColor"
      transform="matrix(1 0 0 -1 5 9)"
    />
    <circle
      cx={2}
      cy={2}
      r={2}
      stroke="currentColor"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 10 14)"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 15.757 17.257 20m4.243 0-4.243-4.243"
    />
  </svg>
);
export default SvgMoneyRemove;
