import * as React from "react";
import type { SVGProps } from "react";
const SvgFormatClear = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.65 5.75-.48 3.36-1.325-1.326.29-2.034H8.811l-1.5-1.5h10.688a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.53 4.47a.75.75 0 0 0-1.06 1.06l5.86 5.86-1.072 7.504a.75.75 0 1 0 1.484.212l.913-6.39 6.815 6.814a.75.75 0 1 0 1.06-1.06z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFormatClear;
