import * as React from "react";
import type { SVGProps } from "react";
const SvgLandscape2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={10}
      height={18}
      x={21}
      y={7}
      fill="currentColor"
      opacity={0.4}
      rx={3}
      transform="rotate(90 21 7)"
    />
    <path
      fill="currentColor"
      d="M17 17v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2zM7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2z"
    />
  </svg>
);
export default SvgLandscape2;
