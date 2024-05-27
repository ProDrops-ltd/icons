import * as React from "react";
import type { SVGProps } from "react";
const SvgMonitor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 15V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v9M2 15a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4M2 15h20m-10 4v3m0 0H9m3 0h3M7 7h5m-5 4h10"
    />
  </svg>
);
export default SvgMonitor;
