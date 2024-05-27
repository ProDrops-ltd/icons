import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoRemove = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.47 12.47a.75.75 0 0 1 1.06 0L12 13.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L13.06 15l1.47 1.47a.75.75 0 1 1-1.06 1.06L12 16.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L10.94 15l-1.47-1.47a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVideoRemove;
