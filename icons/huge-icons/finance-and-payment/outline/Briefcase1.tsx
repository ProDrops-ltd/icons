import * as React from "react";
import type { SVGProps } from "react";
const SvgBriefcase1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={20}
      height={16}
      x={2}
      y={6}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8 6V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1M2 11s6.095 4 10 4 10-4 10-4"
    />
    <path fill="currentColor" d="M14 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
  </svg>
);
export default SvgBriefcase1;
