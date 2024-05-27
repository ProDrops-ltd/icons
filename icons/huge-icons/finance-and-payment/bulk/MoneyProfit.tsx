import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneyProfit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 11a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"
      opacity={0.4}
    />
    <circle
      cx={1}
      cy={1}
      r={1}
      fill="currentColor"
      transform="matrix(1 0 0 -1 17 20)"
    />
    <circle
      cx={1}
      cy={1}
      r={1}
      fill="currentColor"
      transform="matrix(1 0 0 -1 5 12)"
    />
    <circle
      cx={2}
      cy={2}
      r={2}
      fill="currentColor"
      transform="matrix(1 0 0 -1 10 17)"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m11.25 3.396-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.292a.75.75 0 0 1-1.06 1.061l-.72-.72V5.5a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMoneyProfit;
