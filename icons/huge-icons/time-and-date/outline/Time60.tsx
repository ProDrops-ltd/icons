import * as React from "react";
import type { SVGProps } from "react";
const SvgTime60 = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 12V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h2.889"
    />
    <rect
      width={4}
      height={6}
      x={18}
      y={16}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={2}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 7v5l-3 1M16 16h-2a2 2 0 0 0-2 2v1m0 0v1a2 2 0 0 0 2 2h.5a1.5 1.5 0 0 0 1.5-1.5v0a1.5 1.5 0 0 0-1.5-1.5zM22 12l-2-2"
    />
  </svg>
);
export default SvgTime60;
