import * as React from "react";
import type { SVGProps } from "react";
const SvgChartWave1 = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m2 9 2.612 1.96a2 2 0 0 0 2.615-.187l.81-.81a2 2 0 0 1 3.204.519l1.518 3.036a2 2 0 0 0 3.203.52l.811-.812a2 2 0 0 1 2.615-.185L22 15M6 22h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4"
    />
  </svg>
);
export default SvgChartWave1;
