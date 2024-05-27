import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartPlug = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.243 3.757A5.98 5.98 0 0 0 12 2a5.98 5.98 0 0 0-4.243 1.757M9.88 5.88A3 3 0 0 1 12 5a3 3 0 0 1 2.121.879M8 22h8a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Zm8-7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
    <path
      fill="currentColor"
      d="M11.25 15a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M14.25 15a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
    />
  </svg>
);
export default SvgSmartPlug;
