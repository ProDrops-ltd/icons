import * as React from "react";
import type { SVGProps } from "react";
const SvgWhistle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M20 9H8a6 6 0 1 0 6 6h3.789a4 4 0 0 0 2.219-.672l1.101-.734A2 2 0 0 0 22 11.93V11a2 2 0 0 0-2-2"
      opacity={0.4}
    />
    <circle cx={8} cy={15} r={2} fill="currentColor" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.25 11V9h1.5v2a.75.75 0 0 1-1.5 0M14 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M8.47 4.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06M19.53 4.47a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWhistle;
