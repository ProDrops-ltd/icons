import * as React from "react";
import type { SVGProps } from "react";
const SvgApps = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M2 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM22 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM10 18a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM14 16a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"
    />
  </svg>
);
export default SvgApps;
