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
      d="M6 8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.877 21H12.21a4 4 0 0 1-2.219-.672l-1.547-1.031A1 1 0 0 1 8 18.465v-8.2a1 1 0 0 1 .132-.496L12 3h1.329c1.996 0 3.187 2.225 2.08 3.887L14 9h5.438a2 2 0 0 1 1.94 2.485l-1.62 6.485A4 4 0 0 1 15.877 21"
    />
  </svg>
);
export default SvgLike;
