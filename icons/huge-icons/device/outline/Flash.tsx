import * as React from "react";
import type { SVGProps } from "react";
const SvgFlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 13.5 14 2v8.5h5L10 22v-8.5z"
    />
  </svg>
);
export default SvgFlash;
