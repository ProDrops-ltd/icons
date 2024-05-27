import * as React from "react";
import type { SVGProps } from "react";
const SvgClapperboard = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm0 0-4 6M2 8h20M10 2 6 8m4 5.803v2.394c0 1.198 1.335 1.913 2.332 1.248l1.796-1.197a1.5 1.5 0 0 0 0-2.496l-1.796-1.197c-.997-.665-2.332.05-2.332 1.248Z"
    />
  </svg>
);
export default SvgClapperboard;
