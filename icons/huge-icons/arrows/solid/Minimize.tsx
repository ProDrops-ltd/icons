import * as React from "react";
import type { SVGProps } from "react";
const SvgMinimize = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.53 3.53a.75.75 0 0 0-1.06-1.06l-9.72 9.72V8a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h6a.75.75 0 0 0 0-1.5h-4.19zM7 4.25A4.75 4.75 0 0 0 2.25 9v8A4.75 4.75 0 0 0 7 21.75h8A4.75 4.75 0 0 0 19.75 17v-5a.75.75 0 0 0-1.5 0v5A3.25 3.25 0 0 1 15 20.25H7A3.25 3.25 0 0 1 3.75 17V9A3.25 3.25 0 0 1 7 5.75h5a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMinimize;
