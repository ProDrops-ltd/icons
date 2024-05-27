import * as React from "react";
import type { SVGProps } from "react";
const SvgTime10 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 16v6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 12V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h5.889"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 7v5l-3 1M22 12l-2-2"
    />
  </svg>
);
export default SvgTime10;
