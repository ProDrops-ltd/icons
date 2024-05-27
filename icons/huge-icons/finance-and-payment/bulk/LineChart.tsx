import * as React from "react";
import type { SVGProps } from "react";
const SvgLineChart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.307 7.04a.75.75 0 0 1 .208 1.04l-5.781 8.672a.75.75 0 1 1-1.248-.832l5.78-8.672a.75.75 0 0 1 1.04-.208M5 12.75a.75.75 0 0 1 1.05-.15l4.8 3.6a.75.75 0 0 1-.9 1.2l-4.8-3.6A.75.75 0 0 1 5 12.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M6 12a1.997 1.997 0 0 1-2 2 2 2 0 1 1 2-2M14 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0M22 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);
export default SvgLineChart;
