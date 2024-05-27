import * as React from "react";
import type { SVGProps } from "react";
const SvgMailPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.75 4a.75.75 0 0 0-1.5 0v1.25H18a.75.75 0 0 0 0 1.5h1.25V8a.75.75 0 0 0 1.5 0V6.75H22a.75.75 0 0 0 0-1.5h-1.25z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M2 10a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.4 11.55a.75.75 0 0 1 1.05-.15l2.8 2.1a1.25 1.25 0 0 0 1.5 0l2.8-2.1a.75.75 0 0 1 .9 1.2l-2.8 2.1a2.75 2.75 0 0 1-3.3 0l-2.8-2.1a.75.75 0 0 1-.15-1.05"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMailPlus;
