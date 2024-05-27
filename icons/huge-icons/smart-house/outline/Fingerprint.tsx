import * as React from "react";
import type { SVGProps } from "react";
const SvgFingerprint = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 8V6a4 4 0 0 1 4-4h2m8 0h2a4 4 0 0 1 4 4v2m0 8v2a4 4 0 0 1-4 4h-2m-8 0H6a4 4 0 0 1-4-4v-2m11-6v3m-5 4 .343-.343a5.66 5.66 0 0 0 1.657-4V10a3 3 0 1 1 6 0v2.657c0 1.5-.596 2.939-1.657 4L14 17"
    />
  </svg>
);
export default SvgFingerprint;
