import * as React from "react";
import type { SVGProps } from "react";
const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <ellipse
      cx={12}
      cy={17.5}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={7}
      ry={3.5}
    />
    <circle
      cx={12}
      cy={7}
      r={4}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgUser;
