import * as React from "react";
import type { SVGProps } from "react";
const SvgPaypal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 3H13a5 5 0 0 1 0 10H9l-2 5H3zM6 21l.55-1.5h1.466l2-5H13a6.5 6.5 0 0 0 6.473-7.097A5 5 0 0 1 16 16h-4l-2 5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPaypal;
