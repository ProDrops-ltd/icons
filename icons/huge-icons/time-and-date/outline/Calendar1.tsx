import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendar1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M3 9h18"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 2v3M16 2v3"
    />
    <circle cx={12} cy={15} r={1} fill="currentColor" />
    <circle cx={16} cy={15} r={1} fill="currentColor" />
    <circle cx={8} cy={15} r={1} fill="currentColor" />
  </svg>
);
export default SvgCalendar1;
