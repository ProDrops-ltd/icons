import * as React from "react";
import type { SVGProps } from "react";
const SvgSpeaker = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.243 6.757A5.98 5.98 0 0 0 12 5a5.98 5.98 0 0 0-4.243 1.757M9.88 8.88A3 3 0 0 1 12 8a3 3 0 0 1 2.121.879M9 22h6a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4Zm7-7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
    <circle cx={12} cy={15} r={1} fill="currentColor" />
  </svg>
);
export default SvgSpeaker;
