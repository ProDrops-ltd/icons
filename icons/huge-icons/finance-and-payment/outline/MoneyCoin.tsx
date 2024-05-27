import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneyCoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M20 12V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8"
    />
    <rect
      width={10}
      height={4}
      x={12}
      y={16}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={2}
    />
    <rect
      width={10}
      height={4}
      x={12}
      y={12}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={2}
    />
  </svg>
);
export default SvgMoneyCoin;
