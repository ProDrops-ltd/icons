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
    <rect
      width={4}
      height={12}
      x={20}
      y={4}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={2}
      transform="rotate(90 20 4)"
    />
    <rect
      width={4}
      height={12}
      x={20}
      y={12}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={2}
      transform="rotate(90 20 12)"
    />
    <rect
      width={4}
      height={12}
      x={16}
      y={8}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={2}
      transform="rotate(90 16 8)"
    />
    <rect
      width={4}
      height={12}
      x={17}
      y={16}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={2}
      transform="rotate(90 17 16)"
    />
  </svg>
);
export default SvgCoin;
