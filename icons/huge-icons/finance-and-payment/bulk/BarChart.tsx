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
    <rect width={4} height={18} x={10} y={3} fill="currentColor" rx={2} />
    <path
      fill="currentColor"
      d="M2 10a2 2 0 1 1 4 0v9a2 2 0 1 1-4 0zM18 10a2 2 0 1 1 4 0v9a2 2 0 1 1-4 0z"
      opacity={0.4}
    />
  </svg>
);
export default SvgBarChart;
