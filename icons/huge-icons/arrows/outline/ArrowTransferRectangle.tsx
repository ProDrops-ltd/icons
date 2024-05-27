import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowTransferRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4M14 7l2 2m0 0-2 2m2-2H8M10 17l-2-2m0 0 2-2m-2 2h8"
    />
  </svg>
);
export default SvgArrowTransferRectangle;
