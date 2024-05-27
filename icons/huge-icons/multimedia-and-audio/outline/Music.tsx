import * as React from "react";
import type { SVGProps } from "react";
const SvgMusic = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0v-6.225a2 2 0 0 0-2.633-1.897l-6.632 2.21A4 4 0 0 0 9 14.883V19m0 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0m12-7V4.775a2 2 0 0 0-2.633-1.897l-6.632 2.21A4 4 0 0 0 9 8.883V14"
    />
  </svg>
);
export default SvgMusic;
