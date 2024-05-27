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
      fill="currentColor"
      d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
      opacity={0.4}
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
      fill="currentColor"
      transform="matrix(1 0 0 -1 10 14)"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m17.396 17.25.72-.72a.75.75 0 1 0-1.06-1.06l-1.293 1.293a1.75 1.75 0 0 0 0 2.474l1.292 1.293a.75.75 0 1 0 1.061-1.06l-.72-.72H22a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMoneyArrowLeft;
