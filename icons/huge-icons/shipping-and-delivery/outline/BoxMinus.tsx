import * as React from "react";
import type { SVGProps } from "react";
const SvgBoxMinus = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v9"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 19h-6"
    />
  </svg>
);
export default SvgBoxMinus;
