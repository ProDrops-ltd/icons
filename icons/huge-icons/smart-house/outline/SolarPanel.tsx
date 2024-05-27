import * as React from "react";
import type { SVGProps } from "react";
const SvgSolarPanel = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 6h16m-1 4v6a2 2 0 0 1-2 2h-.5M5 10v6a2 2 0 0 0 2 2h.5m5.5-4-3 4h4l-3 4M5.236 10h13.528a2 2 0 0 0 1.789-2.894l-2-4A2 2 0 0 0 16.763 2H7.237a2 2 0 0 0-1.789 1.106l-2 4A2 2 0 0 0 5.236 10M10.2 2h3.6l1.2 8H9z"
    />
  </svg>
);
export default SvgSolarPanel;
