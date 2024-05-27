import * as React from "react";
import type { SVGProps } from "react";
const SvgDesk = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 18v4m3-4v2m10-2v2m3-2v4m2-14H2m1 0h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm14 0V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4z"
    />
  </svg>
);
export default SvgDesk;
