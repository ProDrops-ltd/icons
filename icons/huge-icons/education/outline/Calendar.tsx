import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 9h18M8 2v3m8-3v3M7 22h10a4 4 0 0 0 4-4V7.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V18a4 4 0 0 0 4 4"
    />
  </svg>
);
export default SvgCalendar;
