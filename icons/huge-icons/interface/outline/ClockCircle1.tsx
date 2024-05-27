import * as React from "react";
import type { SVGProps } from "react";
const SvgClockCircle1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 9v2.382a1 1 0 0 0 .553.894L14 13m8-1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-3 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
    />
  </svg>
);
export default SvgClockCircle1;
