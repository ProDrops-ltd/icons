import * as React from "react";
import type { SVGProps } from "react";
const SvgUserRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <ellipse cx={10} cy={17} fill="currentColor" opacity={0.4} rx={7} ry={4} />
    <circle cx={10} cy={7} r={4} fill="currentColor" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.25 11a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUserRemove;
