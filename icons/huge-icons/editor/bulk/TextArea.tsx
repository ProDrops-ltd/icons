import * as React from "react";
import type { SVGProps } from "react";
const SvgTextArea = (props: SVGProps<SVGSVGElement>) => (
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
      height={20}
      x={2}
      y={2}
      fill="currentColor"
      opacity={0.4}
      rx={4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.53 16.47a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0M19.53 12.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTextArea;
