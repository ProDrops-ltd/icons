import * as React from "react";
import type { SVGProps } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M19.102 10.087a2.487 2.487 0 0 1 0 3.827C17.45 15.324 14.883 17 12 17s-5.45-1.675-7.102-3.086a2.487 2.487 0 0 1 0-3.828C6.55 8.676 9.117 7 12 7s5.45 1.675 7.102 3.086Z"
    />
    <circle cx={12} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 2v2M12 20v2M21 5l-1.5 1.5M3 5l1.5 1.5M21 19l-1.5-1.5M3 19l1.5-1.5"
    />
  </svg>
);
export default SvgEye;
