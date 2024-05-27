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
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.5 15c0-2.077-.745-3.98-1.983-5.457l4.935-4.934a7 7 0 0 1-2.97 10.938A9 9 0 0 0 17.5 15M9 6.5q-.276 0-.547.017a7.001 7.001 0 0 1 10.938-2.97l-4.934 4.936A8.47 8.47 0 0 0 9 6.5M9 22a7 7 0 0 1-6.96-6.25h13.92A7 7 0 0 1 9 22m-6.96-7.75h13.92a7.001 7.001 0 0 0-13.92 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPills;
