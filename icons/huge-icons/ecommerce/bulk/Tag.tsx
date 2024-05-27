import * as React from "react";
import type { SVGProps } from "react";
const SvgTag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 8.66c0-1.183.51-2.307 1.397-3.078l3-2.606a3.96 3.96 0 0 1 5.206 0l3 2.606A4.08 4.08 0 0 1 19 8.661v9.285C19 20.185 17.21 22 15 22H9c-2.21 0-4-1.815-4-4.054z"
      opacity={0.4}
    />
    <circle cx={12} cy={8} r={2} fill="currentColor" />
  </svg>
);
export default SvgTag;
