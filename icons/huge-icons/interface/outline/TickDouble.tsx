import * as React from "react";
import type { SVGProps } from "react";
const SvgTickDouble = (props: SVGProps<SVGSVGElement>) => (
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
      d="m2 13 3.526 2.821a2 2 0 0 0 2.736-.224L16 7m-8 6 3.526 2.821a2 2 0 0 0 2.736-.224L22 7"
    />
  </svg>
);
export default SvgTickDouble;
