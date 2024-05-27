import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.5 7.5v8m4-4h-8M22 22l-3.5-3.5m2.5-7a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0"
    />
  </svg>
);
export default SvgSearchPlus;
