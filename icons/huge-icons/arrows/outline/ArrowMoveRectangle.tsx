import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowMoveRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4M14 16l-2 2m0 0-2-2m2 2V6m0 0 2 2m-2-2-2 2M8 14l-2-2m0 0 2-2m-2 2h12m0 0-2 2m2-2-2-2"
    />
  </svg>
);
export default SvgArrowMoveRectangle;
