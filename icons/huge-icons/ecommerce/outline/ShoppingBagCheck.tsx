import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingBagCheck = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.667 13-1.11-6.658A4 4 0 0 0 15.612 3H8.389a4 4 0 0 0-3.946 3.342l-1.667 10A4 4 0 0 0 6.722 21H13M16 19l1.753 1.402a1 1 0 0 0 1.377-.122L22 17"
    />
  </svg>
);
export default SvgShoppingBagCheck;
