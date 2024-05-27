import * as React from "react";
import type { SVGProps } from "react";
const SvgBarcode = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 8V6a4 4 0 0 1 4-4h2m8 0h2a4 4 0 0 1 4 4v2m0 7.944V18a4 4 0 0 1-4 4h-2m-8 0H6a4 4 0 0 1-4-4v-2.056M7 12h10m-1-2.5v-2m-4 2v-2m-4 2v-2m4 9v-2m4 2v-2m-8 2v-2"
    />
  </svg>
);
export default SvgBarcode;
