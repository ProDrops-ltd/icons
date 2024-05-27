import * as React from "react";
import type { SVGProps } from "react";
const SvgTrolley = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 1.25a.75.75 0 0 0 0 1.5h1c.69 0 1.25.56 1.25 1.25v14.145a2 2 0 1 0 2.605 2.605H22a.75.75 0 0 0 0-1.5H6.855a2 2 0 0 0-1.105-1.105V4A2.75 2.75 0 0 0 3 1.25zM8 7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2zm4.25 1a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrolley;
