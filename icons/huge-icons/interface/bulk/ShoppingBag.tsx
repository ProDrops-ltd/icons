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
      fill="currentColor"
      d="M4.388 9.263A4 4 0 0 1 8.32 6h7.36a4 4 0 0 1 3.932 3.263l1.5 8A4 4 0 0 1 17.18 22H6.82a4 4 0 0 1-3.932-4.737z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.25 5a3.75 3.75 0 1 1 7.5 0v3a.75.75 0 0 1-1.5 0V5a2.25 2.25 0 0 0-4.5 0v3a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShoppingBag;
