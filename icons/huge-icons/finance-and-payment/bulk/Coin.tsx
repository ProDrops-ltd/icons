import * as React from "react";
import type { SVGProps } from "react";
const SvgCoin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 4a2 2 0 1 1 0 4h-8a2 2 0 1 1 0-4zM18 12a2 2 0 1 1 0 4h-8a2 2 0 1 1 0-4z"
      opacity={0.4}
    />
    <rect
      width={4}
      height={12}
      x={16}
      y={8}
      fill="currentColor"
      rx={2}
      transform="rotate(90 16 8)"
    />
    <rect
      width={4}
      height={12}
      x={17}
      y={16}
      fill="currentColor"
      rx={2}
      transform="rotate(90 17 16)"
    />
  </svg>
);
export default SvgCoin;
