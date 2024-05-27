import * as React from "react";
import type { SVGProps } from "react";
const SvgProfit1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M18 3H6a4 4 0 1 0 0 8h12a4 4 0 0 0 0-8" />
    <path
      fill="currentColor"
      d="M18 19V7H6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m11.25 12.396-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.293a.75.75 0 1 1-1.06 1.06l-.72-.72v4.19a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgProfit1;
