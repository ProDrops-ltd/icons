import * as React from "react";
import type { SVGProps } from "react";
const SvgTestTube1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.5 3h6m-15 0h6m4 0h4v13a2 2 0 1 1-4 0zm-9 0h4v13a2 2 0 1 1-4 0zM4 9h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2"
    />
  </svg>
);
export default SvgTestTube1;
