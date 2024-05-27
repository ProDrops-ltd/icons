import * as React from "react";
import type { SVGProps } from "react";
const SvgMoney = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={12} r={2} fill="currentColor" />
    <path
      fill="currentColor"
      d="M6.5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M19.5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6.5 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M19.5 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
export default SvgMoney;
