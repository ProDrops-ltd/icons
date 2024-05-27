import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingBag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 6v1a3 3 0 1 0 6 0V6"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.612 3H8.389a4 4 0 0 0-3.946 3.342l-1.667 10A4 4 0 0 0 6.722 21h10.556a4 4 0 0 0 3.946-4.658l-1.667-10A4 4 0 0 0 15.612 3Z"
    />
  </svg>
);
export default SvgShoppingBag;
