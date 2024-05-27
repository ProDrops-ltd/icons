import * as React from "react";
import type { SVGProps } from "react";
const SvgUserBlock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <ellipse
      cx={10}
      cy={17.5}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={7}
      ry={3.5}
    />
    <circle
      cx={10}
      cy={7}
      r={4}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <circle cx={19} cy={11} r={3} stroke="currentColor" strokeWidth={1.5} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m20.5 9.5-3 3"
    />
  </svg>
);
export default SvgUserBlock;
