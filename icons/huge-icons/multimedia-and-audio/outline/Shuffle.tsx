import * as React from "react";
import type { SVGProps } from "react";
const SvgShuffle = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="m17 6 1.293 1.293a1 1 0 0 1 0 1.414L17 10m-4-2h5m-7 8H5m12 2 1.293-1.293a1 1 0 0 0 0-1.414L17 14m1 2h-1.528a4 4 0 0 1-3.578-2.211l-1.788-3.578A4 4 0 0 0 7.528 8H5"
    />
  </svg>
);
export default SvgShuffle;
