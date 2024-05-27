import * as React from "react";
import type { SVGProps } from "react";
const SvgStopwatchAdd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 2.414C14.046 2.144 13.04 2 12 2s-2.046.144-3 .414"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 16v6M20 19h-6"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M13.5 14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M20.126 16A8.5 8.5 0 1 0 14 21.763"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 12V9"
    />
  </svg>
);
export default SvgStopwatchAdd;
