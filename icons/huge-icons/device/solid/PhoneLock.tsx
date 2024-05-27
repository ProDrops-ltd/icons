import * as React from "react";
import type { SVGProps } from "react";
const SvgPhoneLock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 1.25A3.75 3.75 0 0 0 3.25 5v14A3.75 3.75 0 0 0 7 22.75h3.5a.75.75 0 0 0 0-1.5H7A2.25 2.25 0 0 1 4.75 19V5A2.25 2.25 0 0 1 7 2.75h8A2.25 2.25 0 0 1 17.25 5v5.5a.75.75 0 0 0 1.5 0V5A3.75 3.75 0 0 0 15 1.25zm9 12.5c-.69 0-1.25.56-1.25 1.25v1h2.5v-1c0-.69-.56-1.25-1.25-1.25M13.25 15v1.145A2 2 0 0 0 12 18v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-1.25-1.855V15a2.75 2.75 0 1 0-5.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPhoneLock;
