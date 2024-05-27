import * as React from "react";
import type { SVGProps } from "react";
const SvgUserCircle = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.559 19.549a7.003 7.003 0 0 0-13.118 0m13.118 0A9.98 9.98 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.98 9.98 0 0 0 3.441 7.549m13.118 0A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-6.559-2.451M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);
export default SvgUserCircle;
