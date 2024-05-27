import * as React from "react";
import type { SVGProps } from "react";
const SvgAppsCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM20 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM10 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM20 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);
export default SvgAppsCircle;
