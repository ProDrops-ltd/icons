import * as React from "react";
import type { SVGProps } from "react";
const SvgTransfer = (props: SVGProps<SVGSVGElement>) => (
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
      height={8}
      x={2}
      y={2}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={2}
    />
    <rect
      width={10}
      height={8}
      x={12}
      y={14}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={2}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m20.414 4 1.293 1.293a1 1 0 0 1 0 1.414L20.414 8M16 6h5.414M3.586 16l-1.293 1.293a1 1 0 0 0 0 1.414L3.586 20M8 18H2.586"
    />
  </svg>
);
export default SvgTransfer;
