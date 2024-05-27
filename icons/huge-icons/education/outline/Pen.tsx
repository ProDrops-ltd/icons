import * as React from "react";
import type { SVGProps } from "react";
const SvgPen = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.463 4.538a2.476 2.476 0 0 1 0 3.501L8.43 19.072a4.35 4.35 0 0 1-2.101 1.163L3 21l.765-3.329a4.35 4.35 0 0 1 1.163-2.101L15.961 4.538a2.476 2.476 0 0 1 3.502 0m0 0L21 3m-3.844 11.531 1.538-1.537c.849-.85.849-2.226 0-3.075L14.85 6.075M5.306 15.62l3.075 3.075"
    />
  </svg>
);
export default SvgPen;
