import * as React from "react";
import type { SVGProps } from "react";
const SvgQueue = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 6h7m-7 5h7M3 16h18M3 21h18M5.894 11.553l3.528-1.764c1.474-.737 1.474-2.84 0-3.578L5.894 4.447A2 2 0 0 0 3 6.237v3.527a2 2 0 0 0 2.894 1.789"
    />
  </svg>
);
export default SvgQueue;
