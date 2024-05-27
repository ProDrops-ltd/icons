import * as React from "react";
import type { SVGProps } from "react";
const SvgLike = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 8h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.123 21h3.666a4 4 0 0 0 2.219-.672l1.547-1.031a1 1 0 0 0 .445-.832v-8.2a1 1 0 0 0-.132-.496L12 3h-1.329c-1.996 0-3.187 2.225-2.08 3.887L10 9H4.562a2 2 0 0 0-1.94 2.485l1.62 6.485A4 4 0 0 0 8.124 21"
    />
  </svg>
);
export default SvgLike;
