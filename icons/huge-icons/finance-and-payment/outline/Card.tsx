import * as React from "react";
import type { SVGProps } from "react";
const SvgCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={18}
      height={20}
      x={22}
      y={3}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={4}
      transform="rotate(90 22 3)"
    />
    <circle cx={6} cy={17} r={1} fill="currentColor" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 7h20v4H2z"
    />
  </svg>
);
export default SvgCard;
