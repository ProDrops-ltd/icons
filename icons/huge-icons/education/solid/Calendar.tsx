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
      fill="currentColor"
      fillRule="evenodd"
      d="M8 1.25a.75.75 0 0 1 .75.75v1.5h6.5V2a.75.75 0 0 1 1.5 0v1.5H17a4 4 0 0 1 4 4v.75H3V7.5a4 4 0 0 1 4-4h.25V2A.75.75 0 0 1 8 1.25m13 8.5H3V18a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCalendar;
