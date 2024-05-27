import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingBasketRemove = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.121 18.121 9.88 13.88M14.121 13.879 9.88 18.12M9 2 6 6M15 2l3 4"
    />
  </svg>
);
export default SvgShoppingBasketRemove;
