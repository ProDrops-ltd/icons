import * as React from "react";
import type { SVGProps } from "react";
const SvgChartWaveRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M5 12h1a2 2 0 0 0 2-2V9a2 2 0 1 1 4 0v6a2 2 0 1 0 4 0v-1a2 2 0 0 1 2-2h1M6 22h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4Z"
    />
  </svg>
);
export default SvgChartWaveRectangle;
