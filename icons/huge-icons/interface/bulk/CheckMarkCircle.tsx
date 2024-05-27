import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckMarkCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle
      cx={12}
      cy={12}
      r={10}
      fill="currentColor"
      opacity={0.4}
      transform="rotate(180 12 12)"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22.502 2.443a.75.75 0 0 1 .056 1.059l-8.738 9.597a2.75 2.75 0 0 1-3.762.308l-3.526-2.821a.75.75 0 0 1 .937-1.172l3.526 2.822a1.25 1.25 0 0 0 1.71-.14l8.738-9.598a.75.75 0 0 1 1.059-.055"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheckMarkCircle;
