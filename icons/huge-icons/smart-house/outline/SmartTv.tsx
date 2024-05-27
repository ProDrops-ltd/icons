import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartTv = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.75 13a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.243 8.757A5.98 5.98 0 0 0 12 7a5.98 5.98 0 0 0-4.243 1.757M9.88 10.88A3 3 0 0 1 12 10a3 3 0 0 1 2.121.879M7 21c3.768-1.325 5.93-1.342 10 0m-5-1v-3M2 7v6a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4"
    />
  </svg>
);
export default SvgSmartTv;
