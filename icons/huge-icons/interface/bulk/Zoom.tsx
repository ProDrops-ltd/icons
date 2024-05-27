import * as React from "react";
import type { SVGProps } from "react";
const SvgZoom = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.97 17.97a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
      opacity={0.4}
    />
    <circle cx={15} cy={15} r={6} fill="currentColor" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.25 7A4.75 4.75 0 0 1 7 2.25h10A4.75 4.75 0 0 1 21.75 7v1.063a.75.75 0 0 1-1.5 0V7A3.25 3.25 0 0 0 17 3.75H7A3.25 3.25 0 0 0 3.75 7v10A3.25 3.25 0 0 0 7 20.25h1.625a.75.75 0 0 1 0 1.5H7A4.75 4.75 0 0 1 2.25 17z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgZoom;
