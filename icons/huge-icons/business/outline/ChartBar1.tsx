import * as React from "react";
import type { SVGProps } from "react";
const SvgChartBar1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 11a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0v-2a2 2 0 0 0-2-2ZM8 7a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0V9a2 2 0 0 0-2-2Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
    />
  </svg>
);
export default SvgChartBar1;
