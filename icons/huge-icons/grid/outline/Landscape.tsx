import * as React from "react";
import type { SVGProps } from "react";
const SvgLandscape = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 3H5m14 18H5M3 10v4a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3"
    />
  </svg>
);
export default SvgLandscape;
