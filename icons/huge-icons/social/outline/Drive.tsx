import * as React from "react";
import type { SVGProps } from "react";
const SvgDrive = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22 16-3 5H5m17-5L15 3H9m13 13h-5.778M5 21l-3-5L9 3M5 21l2.778-5M9 3l3 5.4m4.222 7.6H7.778m8.444 0L12 8.4M7.778 16 12 8.4"
    />
  </svg>
);
export default SvgDrive;
