import * as React from "react";
import type { SVGProps } from "react";
const SvgMailDelay = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 10a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8m.75-5.5a.75.75 0 0 0-1.5 0V7c0 .414.336.75.75.75h1.5a.75.75 0 0 0 0-1.5h-.75zM5.4 11.55a.75.75 0 0 1 1.05-.15l2.2 1.65c.8.6 1.9.6 2.7 0l2.2-1.65a.75.75 0 0 1 .9 1.2l-2.2 1.65a3.75 3.75 0 0 1-4.5 0l-2.2-1.65a.75.75 0 0 1-.15-1.05"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMailDelay;