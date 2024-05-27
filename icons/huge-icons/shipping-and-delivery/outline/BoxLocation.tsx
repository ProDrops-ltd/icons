import * as React from "react";
import type { SVGProps } from "react";
const SvgBoxLocation = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v5"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 2h8v7.586c0 .89-1.077 1.337-1.707.707l-1.586-1.586a1 1 0 0 0-1.414 0l-1.586 1.586c-.63.63-1.707.184-1.707-.707z"
    />
    <circle cx={19} cy={17} r={1} fill="currentColor" />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 17c0 1.546-1.469 3.376-2.35 4.336a.873.873 0 0 1-1.3 0C17.47 20.376 16 18.546 16 17c0-2.21 1.343-3 3-3s3 .79 3 3Z"
    />
  </svg>
);
export default SvgBoxLocation;
