import * as React from "react";
import type { SVGProps } from "react";
const SvgChartBar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 2v16a4 4 0 0 0 4 4h16M7 11v6m5-10v10m5-8v8"
    />
  </svg>
);
export default SvgChartBar;
