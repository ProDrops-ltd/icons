import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomText = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.97 16.97a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
      opacity={0.4}
    />
    <circle cx={16} cy={14} r={6} fill="currentColor" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.25 14a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75M1.25 9A.75.75 0 0 1 2 8.25h5a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 9M1.25 4A.75.75 0 0 1 2 3.25h13a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 4"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgZoomText;
