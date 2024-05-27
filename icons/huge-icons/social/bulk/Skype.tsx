import * as React from "react";
import type { SVGProps } from "react";
const SvgSkype = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 12a8 8 0 0 0 8.958 7.943 5 5 0 1 0 6.986-6.986Q20 12.488 20 12a8 8 0 0 0-8.958-7.943 5 5 0 1 0-6.986 6.986A8 8 0 0 0 4 12"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.75 10a2.75 2.75 0 0 1 2.75-2.75h1A2.75 2.75 0 0 1 15.25 10a.75.75 0 0 1-1.5 0c0-.69-.56-1.25-1.25-1.25h-1a1.25 1.25 0 1 0 0 2.5h1a2.75 2.75 0 1 1 0 5.5h-1A2.75 2.75 0 0 1 8.75 14a.75.75 0 0 1 1.5 0c0 .69.56 1.25 1.25 1.25h1a1.25 1.25 0 1 0 0-2.5h-1A2.75 2.75 0 0 1 8.75 10"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSkype;
