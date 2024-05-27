import * as React from "react";
import type { SVGProps } from "react";
const SvgChartLine = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 2v16a4 4 0 0 0 4 4h16M21 9l-3.756 4.829c-.467.6-1.355.6-1.822 0l-2.966-3.814a1 1 0 0 0-1.579 0L7 15"
    />
  </svg>
);
export default SvgChartLine;
