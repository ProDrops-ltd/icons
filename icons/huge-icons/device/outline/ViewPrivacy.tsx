import * as React from "react";
import type { SVGProps } from "react";
const SvgViewPrivacy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={11} r={3} stroke="currentColor" strokeWidth={1.5} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 15v-1.5a1.5 1.5 0 0 1 1.5-1.5v0a1.5 1.5 0 0 1 1.5 1.5V15M20 15h-3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 18c-3.816 0-7.175-2.795-9.13-4.853a3.085 3.085 0 0 1 0-4.294C4.825 6.795 8.184 4 12 4s7.174 2.795 9.13 4.853c.58.61.87 1.377.87 2.145"
    />
  </svg>
);
export default SvgViewPrivacy;
