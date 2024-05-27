import * as React from "react";
import type { SVGProps } from "react";
const SvgDonate = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 8H2v9l4.31 2.155A8 8 0 0 0 9.89 20H18a2 2 0 1 0 0-4h-1.584c-.931 0-1.85-.217-2.683-.633l-2.941-1.471a1.911 1.911 0 0 0-.53-3.156z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m12.608 8.51 2.83 3.538a2 2 0 0 0 3.124 0l2.83-3.538A2.78 2.78 0 0 0 22 6.776v-.124A2.65 2.65 0 0 0 19.348 4h-.297c-.513 0-1.005.204-1.367.566a.967.967 0 0 1-1.368 0A1.93 1.93 0 0 0 14.95 4h-.297A2.65 2.65 0 0 0 12 6.652v.124c0 .63.214 1.242.608 1.734"
    />
  </svg>
);
export default SvgDonate;
