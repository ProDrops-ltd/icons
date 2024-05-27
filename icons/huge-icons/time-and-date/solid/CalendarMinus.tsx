import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarMinus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.75 2a.75.75 0 0 0-1.5 0v1.5H7a4 4 0 0 0-4 4v.75h18V7.5a4 4 0 0 0-4-4h-.25V2a.75.75 0 0 0-1.5 0v1.5h-6.5zM21 9.75H3V18a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4zm-6 6a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCalendarMinus;
