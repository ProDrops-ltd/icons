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
      fill="currentColor"
      d="M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M17 3.5H7a4 4 0 0 0-4 4V9h18V7.5a4 4 0 0 0-4-4"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25m8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <circle cx={12} cy={15} r={1} fill="currentColor" />
    <circle cx={16} cy={15} r={1} fill="currentColor" />
    <circle cx={8} cy={15} r={1} fill="currentColor" />
  </svg>
);
export default SvgCalendar1;
