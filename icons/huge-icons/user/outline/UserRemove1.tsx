import * as React from "react";
import type { SVGProps } from "react";
const SvgUserRemove1 = (props: SVGProps<SVGSVGElement>) => (
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
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m17 13 2-2m2-2-2 2m0 0 2 2m-2-2-2-2"
    />
  </svg>
);
export default SvgUserRemove1;
