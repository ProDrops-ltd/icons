import * as React from "react";
import type { SVGProps } from "react";
const SvgIn1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 8 4 4m0 0-4 4m4-4H2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 18.245a8 8 0 1 0 0-12.49"
    />
  </svg>
);
export default SvgIn1;
