import * as React from "react";
import type { SVGProps } from "react";
const SvgMusic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={17} cy={16.048} r={3} stroke="currentColor" strokeWidth={1.5} />
    <circle cx={7} cy={18} r={3} stroke="currentColor" strokeWidth={1.5} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 16.048v-6.046a2 2 0 0 0-2.743-1.857l-4.743 1.897A4 4 0 0 0 10 13.756v4.292"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 12.048V5.002a2 2 0 0 0-2.743-1.857l-4.743 1.897A4 4 0 0 0 10 8.756v7.292"
    />
  </svg>
);
export default SvgMusic;
