import * as React from "react";
import type { SVGProps } from "react";
const SvgWatch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={7} stroke="currentColor" strokeWidth={1.5} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9v3l-2 1"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17 17v3a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-3M17 7V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v3"
    />
  </svg>
);
export default SvgWatch;
