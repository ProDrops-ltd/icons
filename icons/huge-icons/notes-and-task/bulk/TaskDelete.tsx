import * as React from "react";
import type { SVGProps } from "react";
const SvgTaskDelete = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4"
      opacity={0.4}
    />
    <rect width={8} height={4} x={8} y={2} fill="currentColor" rx={2} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.652 11.349a.75.75 0 0 1 0 1.06L13.06 14l1.59 1.591a.75.75 0 1 1-1.06 1.06L12 15.062l-1.591 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59-1.59-1.592a.75.75 0 0 1 1.06-1.06L12 12.939l1.591-1.59a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTaskDelete;
