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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 6a4 4 0 0 0-8 0M6.82 22h10.36a4 4 0 0 0 3.932-4.737l-1.5-8A4 4 0 0 0 15.68 6H8.32a4 4 0 0 0-3.932 3.263l-1.5 8A4 4 0 0 0 6.82 22Z"
    />
  </svg>
);
export default SvgShoppingBag;
