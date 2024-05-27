import * as React from "react";
import type { SVGProps } from "react";
const SvgCapsule = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.558 4.792a6.117 6.117 0 0 1 8.65 8.65l-5.766 5.767a6.117 6.117 0 1 1-8.65-8.65z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.95 7.05a3 3 0 0 1 0 4.243"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.757 7.757 8.486 8.486"
    />
  </svg>
);
export default SvgCapsule;
