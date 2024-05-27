import * as React from "react";
import type { SVGProps } from "react";
const SvgFilter1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.25 8A.75.75 0 0 1 3 7.25h4a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 8M2.25 16a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M16.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M13.25 8a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M18 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      opacity={0.4}
    />
  </svg>
);
export default SvgFilter1;
