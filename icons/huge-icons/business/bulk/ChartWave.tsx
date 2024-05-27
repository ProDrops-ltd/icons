import * as React from "react";
import type { SVGProps } from "react";
const SvgChartWave = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 7.75c-.69 0-1.25.56-1.25 1.25v1A2.75 2.75 0 0 1 7 12.75H6a.75.75 0 0 1 0-1.5h1c.69 0 1.25-.56 1.25-1.25V9a2.75 2.75 0 0 1 5.5 0v6a1.25 1.25 0 1 0 2.5 0v-1A2.75 2.75 0 0 1 19 11.25h1a.75.75 0 0 1 0 1.5h-1c-.69 0-1.25.56-1.25 1.25v1a2.75 2.75 0 1 1-5.5 0V9c0-.69-.56-1.25-1.25-1.25"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 1.25a.75.75 0 0 1 .75.75v15A3.25 3.25 0 0 0 6 20.25h16a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 17V2A.75.75 0 0 1 2 1.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChartWave;
