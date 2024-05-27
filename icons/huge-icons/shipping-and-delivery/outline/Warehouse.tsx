import * as React from "react";
import type { SVGProps } from "react";
const SvgWarehouse = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M2 10.083a4 4 0 0 1 1.706-3.277l6-4.2a4 4 0 0 1 4.588 0l6 4.2A4 4 0 0 1 22 10.083V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M18 22V12a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 14H6M18 18H6"
    />
  </svg>
);
export default SvgWarehouse;
