import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraOff = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M10.717 10.788a3 3 0 1 0 3.99 4.007"
    />
    <circle cx={12} cy={7} r={1} fill="currentColor" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 21 3 3"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.812 5.873A5.75 5.75 0 0 0 2.25 11.5v4A5.75 5.75 0 0 0 8 21.25h8c1.7 0 3.227-.737 4.28-1.91l-1.063-1.062A4.24 4.24 0 0 1 16 19.75H8a4.25 4.25 0 0 1-4.25-4.25v-4A4.25 4.25 0 0 1 8 7.25h.126q.03 0 .06-.002zM20 16.939c.162-.45.25-.934.25-1.439v-4A4.25 4.25 0 0 0 16 7.25h-.126a.75.75 0 0 1-.726-.563 3.252 3.252 0 0 0-6.05-.65L7.998 4.938a4.751 4.751 0 0 1 8.424.827A5.75 5.75 0 0 1 21.75 11.5v4c0 .928-.22 1.804-.61 2.58z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCameraOff;
