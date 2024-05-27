import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareRoot = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 13h1.5a1 1 0 0 1 .8.4l1.511 2.015a1 1 0 0 0 1.758-.312l2.217-7.39A1 1 0 0 1 11.744 7H21m-2.879 4.757L13.88 16m4.242 0-4.242-4.243"
    />
  </svg>
);
export default SvgSquareRoot;
