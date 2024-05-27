import * as React from "react";
import type { SVGProps } from "react";
const SvgHalfMoon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.672 14.869A9.197 9.197 0 0 0 14.475 3 9.2 9.2 0 0 1 21 11.803 9.197 9.197 0 0 1 11.803 21 9.2 9.2 0 0 1 3 14.475a9.2 9.2 0 0 0 2.672.394Z"
    />
  </svg>
);
export default SvgHalfMoon;
