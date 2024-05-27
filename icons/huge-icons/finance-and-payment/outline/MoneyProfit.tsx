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
    <rect
      width={18}
      height={14}
      x={3}
      y={8}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={3}
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
      stroke="currentColor"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 10 17)"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m14 3.586-1.293-1.293a1 1 0 0 0-1.414 0L10 3.586M12 5.5V2.586"
    />
  </svg>
);
export default SvgMoneyProfit;
