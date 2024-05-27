import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneyArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 20H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6"
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
      strokeWidth={1.5}
      d="m17.586 20-1.293-1.293a1 1 0 0 1 0-1.414L17.586 16M22 18h-5.414"
    />
  </svg>
);
export default SvgMoneyArrowLeft;
