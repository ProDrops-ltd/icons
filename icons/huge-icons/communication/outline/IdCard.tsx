import * as React from "react";
import type { SVGProps } from "react";
const SvgIdCard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 17h-3m3-3h-3m-9 7h12a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4M8 7h2a2 2 0 1 1 0 4H8a2 2 0 1 1 0-4"
    />
  </svg>
);
export default SvgIdCard;
