import * as React from "react";
import type { SVGProps } from "react";
const SvgMoney1 = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 7h2M17 17h2"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);
export default SvgMoney1;
