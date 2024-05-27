import * as React from "react";
import type { SVGProps } from "react";
const SvgEditRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M6 2.75A3.25 3.25 0 0 0 2.75 6v12A3.25 3.25 0 0 0 6 21.25h12A3.25 3.25 0 0 0 21.25 18v-6a.75.75 0 0 1 1.5 0v6A4.75 4.75 0 0 1 18 22.75H6A4.75 4.75 0 0 1 1.25 18V6A4.75 4.75 0 0 1 6 1.25h6a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m9.155 15.99 3.003-.43a2.02 2.02 0 0 0 1.145-.572l6.674-6.674s-1.43 0-2.86-1.43c-1.43-1.431-1.43-2.861-1.43-2.861l-6.675 6.674c-.31.31-.51.711-.572 1.145l-.43 3.003a1.01 1.01 0 0 0 1.145 1.144"
    />
    <path
      fill="currentColor"
      d="m21.408 4.023-1.43-1.43c-.79-.79-2.072-.79-2.861 0l-1.43 1.43s0 1.43 1.43 2.86 2.86 1.43 2.86 1.43l1.43-1.43c.79-.79.79-2.07 0-2.86"
      opacity={0.4}
    />
  </svg>
);
export default SvgEditRectangle;
