import * as React from "react";
import type { SVGProps } from "react";
const SvgRoadPin1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={4} r={2} stroke="currentColor" strokeWidth={1.5} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 12V6"
    />
    <rect
      width={20}
      height={14}
      x={2}
      y={8}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12.5 15h-1M17 15h-1M8 15H7"
    />
  </svg>
);
export default SvgRoadPin1;
