import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoMinus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m8.663 2-3 6h1.674l3-6h6.326l-3 6h1.674l2.993-5.987A4 4 0 0 1 22 6v2H2V6a4 4 0 0 1 4-4z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.75 15a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVideoMinus;
