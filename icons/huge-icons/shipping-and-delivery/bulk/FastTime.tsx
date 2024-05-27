import * as React from "react";
import type { SVGProps } from "react";
const SvgFastTime = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
      opacity={0.4}
    />
    <path fill="currentColor" d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 5.25a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-.75-.75m.97 7.72a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-1.5-1.5a.75.75 0 0 0-1.06 0M1.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75M1.25 21a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75M1.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFastTime;
