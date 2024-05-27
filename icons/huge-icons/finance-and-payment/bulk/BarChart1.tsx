import * as React from "react";
import type { SVGProps } from "react";
const SvgBarChart1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 5a2 2 0 1 1 4 0v14a2 2 0 1 1-4 0z"
      opacity={0.4}
    />
    <rect width={4} height={13} x={10} y={8} fill="currentColor" rx={2} />
    <path
      fill="currentColor"
      d="M18 5a2 2 0 1 1 4 0v14a2 2 0 1 1-4 0z"
      opacity={0.4}
    />
  </svg>
);
export default SvgBarChart1;
