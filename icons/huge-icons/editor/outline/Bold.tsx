import * as React from "react";
import type { SVGProps } from "react";
const SvgBold = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 5h4.5a3.5 3.5 0 1 1 0 7H7zM7 12h6.5a3.5 3.5 0 1 1 0 7H7z"
    />
  </svg>
);
export default SvgBold;
