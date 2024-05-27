import * as React from "react";
import type { SVGProps } from "react";
const SvgStudentCard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 14a3 3 0 0 1 3 3 1 1 0 0 1-1 1H7a1 1 0 0 1-1-1 3 3 0 0 1 3-3Zm0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm9-2h-3m3 4h-3M5 22h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3Zm9-16V4a2 2 0 1 0-4 0v2z"
    />
  </svg>
);
export default SvgStudentCard;
