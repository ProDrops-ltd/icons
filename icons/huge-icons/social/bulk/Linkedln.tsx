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
    <circle cx={4} cy={4} r={2} fill="currentColor" />
    <path fill="currentColor" d="M2 8.5h4V22H2z" />
    <path
      fill="currentColor"
      d="M13 8.5H9V22h4v-7a2 2 0 1 1 4 0v7h4v-7a6 6 0 0 0-8-5.659z"
      opacity={0.4}
    />
  </svg>
);
export default SvgLinkedln;
