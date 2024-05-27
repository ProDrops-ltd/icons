import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingBasketArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14 17-1.293 1.293a1 1 0 0 1-1.414 0L10 17m2-4v5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.069 22h7.862a4 4 0 0 0 3.885-3.045l1.966-8A4 4 0 0 0 17.898 6H6.102a4 4 0 0 0-3.884 4.955l1.967 8A4 4 0 0 0 8.069 22"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M3 10h18"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 2 6 6M15 2l3 4"
    />
  </svg>
);
export default SvgShoppingBasketArrowDown;
