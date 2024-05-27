import * as React from "react";
import type { SVGProps } from "react";
const SvgOpenBox1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 10v6.764a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.763V10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20 6-7.106-3.553a2 2 0 0 0-1.788 0L4 6l8 4z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20 6-8 4 2 3 8-4zM4 6l8 4-2 3-8-4z"
    />
  </svg>
);
export default SvgOpenBox1;
