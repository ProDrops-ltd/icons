import * as React from "react";
import type { SVGProps } from "react";
const SvgKeySkeleton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#A2A1FF"
      d="M7 12.001a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-1.415 7.412a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
    />
    <path
      fill="#6563FF"
      d="m21.002 4.413.705-.706a1 1 0 1 0-1.414-1.414L9.754 12.833a5 5 0 0 1 1.414 1.413l5.591-5.59 2.12 2.12a1 1 0 1 0 1.414-1.414l-2.12-2.12 1.414-1.415.706.706a1 1 0 0 0 1.414-1.414z"
    />
  </svg>
);
export default SvgKeySkeleton;
