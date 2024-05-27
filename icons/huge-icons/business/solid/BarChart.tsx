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
      d="M20 3a2 2 0 0 1 2 2v14a2 2 0 1 1-4 0V5a2 2 0 0 1 2-2M4 11a2 2 0 0 1 2 2v6a2 2 0 1 1-4 0v-6a2 2 0 0 1 2-2m10-2a2 2 0 1 0-4 0v10a2 2 0 1 0 4 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBarChart;
