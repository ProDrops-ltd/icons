import * as React from "react";
import type { SVGProps } from "react";
const SvgHartArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 2v16a4 4 0 0 0 4 4h16"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7 14 2.586-2.586a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 0 2.828 0L19 10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.5 9H19a1 1 0 0 1 1 1v1.5"
    />
  </svg>
);
export default SvgHartArrowUp;
