import * as React from "react";
import type { SVGProps } from "react";
const SvgCalculator1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v2.5H2z"
      opacity={0.4}
    />
    <path fill="currentColor" d="M2 10h6v6H2z" />
    <path fill="currentColor" d="M8 10h6v6H8z" opacity={0.4} />
    <path
      fill="currentColor"
      d="M15.5 10H22v8a4 4 0 0 1-4 4h-2.5zM8 16h6v6H8z"
    />
    <path fill="currentColor" d="M2 16h6v6H6a4 4 0 0 1-4-4z" opacity={0.4} />
  </svg>
);
export default SvgCalculator1;
