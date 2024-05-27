import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.47 16.53a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8a.75.75 0 0 0-1.5 0v6.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDownRectangle;
