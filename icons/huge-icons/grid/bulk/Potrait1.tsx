import * as React from "react";
import type { SVGProps } from "react";
const SvgPotrait1 = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M7.75 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75M21.75 12a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
    <rect
      width={10}
      height={18}
      x={7}
      y={3}
      fill="currentColor"
      opacity={0.4}
      rx={3}
    />
  </svg>
);
export default SvgPotrait1;
