import * as React from "react";
import type { SVGProps } from "react";
const SvgRotateLock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 10V9a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v1M14 10h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a10 10 0 0 0 8.96-5.556"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m22 12-3-1"
    />
  </svg>
);
export default SvgRotateLock;
