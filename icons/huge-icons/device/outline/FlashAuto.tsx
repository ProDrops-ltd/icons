import * as React from "react";
import type { SVGProps } from "react";
const SvgFlashAuto = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 13.5 12 2v8.5h5L8 22v-8.5z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16 8 2.5-6L21 8M17 6h3"
    />
  </svg>
);
export default SvgFlashAuto;
