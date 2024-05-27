import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraOff = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="m7 6 1.406-2.11A2 2 0 0 1 10.07 3h3.86a2 2 0 0 1 1.664.89L17 6h1a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4zm5 10.5a3 3 0 0 1-1.89-5.33l4.22 4.22A3 3 0 0 1 12 16.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <circle cx={12} cy={6} r={1} fill="currentColor" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.605 20.665A4 4 0 0 1 18 21H6a4 4 0 0 1-4-4v-7c0-1.883 1.3-3.461 3.052-3.887L1.47 2.53a.75.75 0 0 1 1.06-1.06l20 20a.75.75 0 1 1-1.06 1.06zM12 16.5a3 3 0 0 1-1.89-5.33l4.22 4.22A3 3 0 0 1 12 16.5"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M15 13.5a3 3 0 0 0-3.411-2.972l3.383 3.383Q15 13.71 15 13.5"
    />
  </svg>
);
export default SvgCameraOff;
