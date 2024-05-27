import * as React from "react";
import type { SVGProps } from "react";
const SvgPills = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={9} cy={15} r={7} stroke="currentColor" strokeWidth={1.5} />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M16 15a7 7 0 0 0-7.937-6.938 7 7 0 1 1 7.875 7.875A7 7 0 0 0 16 15Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 15h14M19.95 4.05l-6 6"
    />
  </svg>
);
export default SvgPills;
