import * as React from "react";
import type { SVGProps } from "react";
const SvgPieChart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 13a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M21.803 10.013a10.01 10.01 0 0 0-7.816-7.816C12.905 1.98 12 2.895 12 4v6a2 2 0 0 0 2 2h6c1.105 0 2.02-.905 1.802-1.987"
    />
  </svg>
);
export default SvgPieChart;
