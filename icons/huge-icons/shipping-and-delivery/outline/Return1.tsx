import * as React from "react";
import type { SVGProps } from "react";
const SvgReturn1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={10}
      height={10}
      x={7}
      y={7}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={2}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 10h-2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 12c0 5.523-4.477 10-10 10a9.99 9.99 0 0 1-8-4m-2-6C2 6.477 6.477 2 12 2a9.99 9.99 0 0 1 8 4M4 18l-1 3M20 6l1-3"
    />
  </svg>
);
export default SvgReturn1;
