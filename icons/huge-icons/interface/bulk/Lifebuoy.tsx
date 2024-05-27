import * as React from "react";
import type { SVGProps } from "react";
const SvgLifebuoy = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 16V8a5.98 5.98 0 0 0-1.757-4.243l-5.415 5.415A3.99 3.99 0 0 1 16 12a3.99 3.99 0 0 1-1.172 2.828l5.415 5.415A5.98 5.98 0 0 0 22 16M2 8v8c0 1.657.672 3.157 1.757 4.243l5.415-5.415A4 4 0 0 1 8 12c0-1.105.448-2.105 1.172-2.828L3.757 3.757A5.98 5.98 0 0 0 2 8"
    />
    <g fill="currentColor" opacity={0.4}>
      <path d="M16 2H8a5.98 5.98 0 0 0-4.243 1.757l5.415 5.415A3.99 3.99 0 0 1 12 8c1.104 0 2.105.448 2.828 1.172l5.415-5.415A5.98 5.98 0 0 0 16 2M8 22h8a5.98 5.98 0 0 0 4.243-1.757l-5.415-5.415A3.99 3.99 0 0 1 12 16a3.99 3.99 0 0 1-2.828-1.172l-5.415 5.415A5.98 5.98 0 0 0 8 22" />
    </g>
  </svg>
);
export default SvgLifebuoy;
