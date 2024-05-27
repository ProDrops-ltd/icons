import * as React from "react";
import type { SVGProps } from "react";
const SvgBagMinus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 6a4 4 0 0 0-8 0"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.562 9.504A4 4 0 0 1 8.532 6h6.937a4 4 0 0 1 3.969 3.504l1 8A4 4 0 0 1 16.468 22H7.532a4 4 0 0 1-3.969-4.496z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 14h6"
    />
  </svg>
);
export default SvgBagMinus;
