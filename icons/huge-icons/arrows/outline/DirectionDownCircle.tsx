import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectionDownCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8 9 2.8 2.1a2 2 0 0 0 2.4 0L16 9M8 14l2.8 2.1a2 2 0 0 0 2.4 0L16 14"
    />
  </svg>
);
export default SvgDirectionDownCircle;
