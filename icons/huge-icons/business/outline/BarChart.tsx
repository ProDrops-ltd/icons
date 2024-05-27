import * as React from "react";
import type { SVGProps } from "react";
const SvgBarChart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 3a2 2 0 0 1 2 2v14a2 2 0 1 1-4 0V5a2 2 0 0 1 2-2ZM4 11a2 2 0 0 1 2 2v6a2 2 0 1 1-4 0v-6a2 2 0 0 1 2-2ZM12 7a2 2 0 0 1 2 2v10a2 2 0 1 1-4 0V9a2 2 0 0 1 2-2Z"
    />
  </svg>
);
export default SvgBarChart;
