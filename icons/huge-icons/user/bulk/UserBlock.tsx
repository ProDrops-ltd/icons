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
    <ellipse cx={10} cy={17} fill="currentColor" opacity={0.4} rx={7} ry={4} />
    <circle cx={10} cy={7} r={4} fill="currentColor" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19 14a3 3 0 0 0 2.482-4.686l-4.168 4.168a3 3 0 0 1-.796-.796l4.168-4.168A3 3 0 1 0 19 14"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUserBlock;
