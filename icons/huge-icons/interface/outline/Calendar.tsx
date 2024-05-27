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
      strokeWidth={1.5}
      d="M3 9v9a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9M3 9V7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V9M3 9h18m-5-7v3M8 2v3"
    />
  </svg>
);
export default SvgCalendar;
