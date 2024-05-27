import * as React from "react";
import type { SVGProps } from "react";
const SvgImageTick = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V9m0 5-2.939-2.116a4 4 0 0 0-5.013.273l-4.096 3.686a4 4 0 0 1-5.013.273L2 14m14-9 1.185 1.185a1 1 0 0 0 1.507-.107L21 3M11 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
    />
  </svg>
);
export default SvgImageTick;
