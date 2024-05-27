import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkedln = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={4} cy={4} r={2} stroke="currentColor" strokeWidth={1.5} />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 8.5h4V22H2zM9 22h4v-7a2 2 0 1 1 4 0v7h4v-7a6 6 0 0 0-8-5.659V8.5H9zm0 0v-7"
    />
  </svg>
);
export default SvgLinkedln;
