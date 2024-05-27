import * as React from "react";
import type { SVGProps } from "react";
const SvgUnlock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 8H8a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4m0 0V6a4 4 0 0 0-7.465-2M14 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);
export default SvgUnlock;
