import * as React from "react";
import type { SVGProps } from "react";
const SvgMailArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22 6-1.293 1.293a1 1 0 0 1-1.414 0L18 6m2-4v5M6 13l2.2 1.65a3 3 0 0 0 3.6 0L14 13m-9 9h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3"
    />
  </svg>
);
export default SvgMailArrowDown;
