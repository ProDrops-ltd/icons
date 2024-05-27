import * as React from "react";
import type { SVGProps } from "react";
const SvgPayoneer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-3a7 7 0 1 0 0-14 7 7 0 0 0 0 14"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPayoneer;
