import * as React from "react";
import type { SVGProps } from "react";
const SvgStethoscope = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M17.25 10.75a2 2 0 0 0-2 2v5.5a4.5 4.5 0 1 1-9 0V13a.75.75 0 0 1 1.5 0v5.25a3 3 0 1 0 6 0v-5.5a3.5 3.5 0 1 1 7 0V14a.75.75 0 0 1-1.5 0v-1.25a2 2 0 0 0-2-2"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path fill="currentColor" d="M22 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.25 2.354A2.75 2.75 0 0 0 1.25 5v3a5.75 5.75 0 0 0 11.5 0V5c0-1.259-.846-2.32-2-2.646V4c.304.228.5.591.5 1v3a4.25 4.25 0 0 1-8.5 0V5c0-.409.196-.772.5-1z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M4 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 4 1.25"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgStethoscope;
