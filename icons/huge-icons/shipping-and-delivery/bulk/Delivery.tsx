import * as React from "react";
import type { SVGProps } from "react";
const SvgDelivery = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 3H6a4 4 0 0 0-4 4v8a4 4 0 0 0 3.004 3.875A2 2 0 0 1 9 19h5V7a4 4 0 0 0-4-4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M14 19V7h3.21a2 2 0 0 1 1.367.54l2.79 2.617a2 2 0 0 1 .633 1.46V17a2 2 0 0 1-2 2zM9.5 19a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
    />
    <path
      fill="currentColor"
      d="M20.495 19a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      opacity={0.4}
    />
  </svg>
);
export default SvgDelivery;
