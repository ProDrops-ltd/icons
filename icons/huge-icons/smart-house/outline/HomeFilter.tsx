import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeFilter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 11h2m2 0h4m-2 5h2m-8 0h4m-2-6v2m4 3v2m7-6.85v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.05 4.05 0 0 1 21 10.15Z"
    />
  </svg>
);
export default SvgHomeFilter;
