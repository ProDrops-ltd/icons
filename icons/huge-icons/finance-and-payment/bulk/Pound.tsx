import * as React from "react";
import type { SVGProps } from "react";
const SvgPound = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 12h10m2-4V6.5a3.5 3.5 0 1 0-7 0v2.069a10 10 0 0 1-2.106 6.14L7.51 17.771C6.489 19.086 7.425 21 9.089 21H19"
    />
  </svg>
);
export default SvgPound;
