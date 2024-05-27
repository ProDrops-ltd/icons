import * as React from "react";
import type { SVGProps } from "react";
const SvgTestTube1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 2h4v5.528a2 2 0 0 0 .211.894l5.342 10.684A2 2 0 0 1 17.763 22H6.237a2 2 0 0 1-1.789-2.894L9.79 8.422a2 2 0 0 0 .21-.894z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.25 2A.75.75 0 0 1 9 1.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 2"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M6.236 22h11.528a2 2 0 0 0 1.789-2.894L16.5 13h-9l-3.053 6.106A2 2 0 0 0 6.236 22"
    />
  </svg>
);
export default SvgTestTube1;
