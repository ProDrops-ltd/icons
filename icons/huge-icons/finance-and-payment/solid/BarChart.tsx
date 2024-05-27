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
      fill="currentColor"
      fillRule="evenodd"
      d="M10 5a2 2 0 1 1 4 0v14a2 2 0 1 1-4 0zm-8 5a2 2 0 1 1 4 0v9a2 2 0 1 1-4 0zm18-2a2 2 0 0 0-2 2v9a2 2 0 1 0 4 0v-9a2 2 0 0 0-2-2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBarChart;
