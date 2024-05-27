import * as React from "react";
import type { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={12}
      height={6}
      x={6}
      y={3}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={3}
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3ZM6 18a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0Z"
    />
    <circle cx={15} cy={12} r={3} stroke="currentColor" strokeWidth={1.5} />
  </svg>
);
export default SvgFigma;
