import * as React from "react";
import type { SVGProps } from "react";
const SvgChartWave = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 12h1a2 2 0 0 0 2-2V9a2 2 0 1 1 4 0v6a2 2 0 1 0 4 0v-1a2 2 0 0 1 2-2h1M2 2v15a4 4 0 0 0 4 4h16"
    />
  </svg>
);
export default SvgChartWave;
