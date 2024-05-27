import * as React from "react";
import type { SVGProps } from "react";
const SvgWaves = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.75 9.5a2.25 2.25 0 0 0-4.5 0v.5c0 .69-.56 1.25-1.25 1.25H6a.75.75 0 0 0 0 1.5h1A2.75 2.75 0 0 0 9.75 10v-.5a.75.75 0 0 1 1.5 0v5a2.25 2.25 0 0 0 4.5 0 .75.75 0 0 1 .75-.75H18a.75.75 0 0 0 0-1.5h-1.5a2.25 2.25 0 0 0-2.25 2.25.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWaves;
