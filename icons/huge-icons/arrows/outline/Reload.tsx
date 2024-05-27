import * as React from "react";
import type { SVGProps } from "react";
const SvgReload = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14.857 2 1.178 3.09A8 8 0 0 0 5.07 16m4.073 6-1.178-3.09A8 8 0 0 0 18.93 8"
    />
  </svg>
);
export default SvgReload;
