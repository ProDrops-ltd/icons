import * as React from "react";
import type { SVGProps } from "react";
const SvgFountainPen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M17 6H7a2 2 0 1 1 0-4h10a2 2 0 1 1 0 4" />
    <path
      fill="currentColor"
      d="M17.008 6H6.992l-1.714 5.328a3.94 3.94 0 0 0 .474 3.769l5.296 6.429c.45.632 1.453.632 1.904 0l5.296-6.43a3.95 3.95 0 0 0 .474-3.768z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12.75 13.855a2 2 0 1 0-1.5 0v7.886a1.215 1.215 0 0 0 1.5 0z"
    />
  </svg>
);
export default SvgFountainPen;
