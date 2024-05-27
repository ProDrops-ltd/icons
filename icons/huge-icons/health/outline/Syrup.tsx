import * as React from "react";
import type { SVGProps } from "react";
const SvgSyrup = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5a1.5 1.5 0 0 1 0 3h-5A1.5 1.5 0 0 1 8 3.5ZM6 12.14a4 4 0 0 1 1.781-3.327l.328-.22A2 2 0 0 0 9 6.93V5h6v1.93a2 2 0 0 0 .89 1.664l.329.219A4 4 0 0 1 18 12.14V18a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4z"
    />
    <circle cx={12} cy={15} r={3} stroke="currentColor" strokeWidth={1.5} />
  </svg>
);
export default SvgSyrup;
