import * as React from "react";
import type { SVGProps } from "react";
const SvgCopyCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 8V6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-2M8 8H6a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-2M8 8h4a4 4 0 0 1 4 4v4M6 15l1.753 1.402a1 1 0 0 0 1.377-.122L12 13"
    />
  </svg>
);
export default SvgCopyCheck;
