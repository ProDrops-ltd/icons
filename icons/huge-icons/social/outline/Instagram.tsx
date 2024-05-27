import * as React from "react";
import type { SVGProps } from "react";
const SvgInstagram = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeWidth={1.5}
      rx={4}
    />
    <circle cx={18} cy={6} r={1} fill="currentColor" />
    <circle cx={12} cy={12} r={5} stroke="currentColor" strokeWidth={1.5} />
  </svg>
);
export default SvgInstagram;
