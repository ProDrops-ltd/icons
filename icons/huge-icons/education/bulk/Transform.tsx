import * as React from "react";
import type { SVGProps } from "react";
const SvgTransform = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M1.25 6A4.75 4.75 0 0 1 6 1.25h2a.75.75 0 0 1 0 1.5H6A3.25 3.25 0 0 0 2.75 6v2a.75.75 0 0 1-1.5 0zm14-4a.75.75 0 0 1 .75-.75h2A4.75 4.75 0 0 1 22.75 6v2a.75.75 0 0 1-1.5 0V6A3.25 3.25 0 0 0 18 2.75h-2a.75.75 0 0 1-.75-.75M2 15.25a.75.75 0 0 1 .75.75v2A3.25 3.25 0 0 0 6 21.25h2a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 18v-2a.75.75 0 0 1 .75-.75m20 0a.75.75 0 0 1 .75.75v2A4.75 4.75 0 0 1 18 22.75h-2a.75.75 0 0 1 0-1.5h2A3.25 3.25 0 0 0 21.25 18v-2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <circle cx={12} cy={12} r={5} fill="currentColor" opacity={0.4} />
  </svg>
);
export default SvgTransform;
