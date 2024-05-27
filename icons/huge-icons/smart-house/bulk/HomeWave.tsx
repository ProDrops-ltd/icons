import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeWave = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.05 4.05 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.5 11.75a.75.75 0 0 0-.75.75v1a2.25 2.25 0 0 1-2.25 2.25H7a.75.75 0 0 1 0-1.5h.5a.75.75 0 0 0 .75-.75v-1a2.25 2.25 0 0 1 4.5 0v3a.75.75 0 0 0 1.5 0 2.25 2.25 0 0 1 2.25-2.25h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0v-3a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHomeWave;
