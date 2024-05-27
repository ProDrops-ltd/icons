import * as React from "react";
import type { SVGProps } from "react";
const SvgCollection = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M20 11H4m16 0a2 2 0 0 1 2 2v4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-4a2 2 0 0 1 2-2m16 0V9a2 2 0 0 0-2-2M4 11V9a2 2 0 0 1 2-2m12 0H6m12 0V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2m4 7h4"
    />
  </svg>
);
export default SvgCollection;
