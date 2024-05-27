import * as React from "react";
import type { SVGProps } from "react";
const SvgAtm = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5V4z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 8h14v4H5zM5 2v20"
    />
  </svg>
);
export default SvgAtm;
