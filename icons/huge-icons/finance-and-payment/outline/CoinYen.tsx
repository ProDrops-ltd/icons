import * as React from "react";
import type { SVGProps } from "react";
const SvgCoinYen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 11h6M9 14h6M9 7l3 4 3-4M12 11v6"
    />
  </svg>
);
export default SvgCoinYen;
