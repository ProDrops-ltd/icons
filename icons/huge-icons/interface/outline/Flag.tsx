import * as React from "react";
import type { SVGProps } from "react";
const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 22v-8m0 0V3m0 11h4M3 3V2m0 1h12a2 2 0 0 1 2 2v2m0 0h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-3m10-7v5a2 2 0 0 1-2 2H7"
    />
  </svg>
);
export default SvgFlag;
