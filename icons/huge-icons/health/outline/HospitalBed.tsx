import * as React from "react";
import type { SVGProps } from "react";
const SvgHospitalBed = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 4.5v4M16 4.5v4M19 6.5h-3M2 9v9m0 4v-4m0 0h20v4M20 14H2v4h20v-2a2 2 0 0 0-2-2M5 12v2h5v-2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1"
    />
  </svg>
);
export default SvgHospitalBed;
