import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowReturnCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14 7 2 2m0 0-2 2m2-2h-5a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h5"
    />
  </svg>
);
export default SvgArrowReturnCircle;
