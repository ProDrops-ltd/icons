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
      fillRule="evenodd"
      d="M14.75 3a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zM9.53 4.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 1 0 1.06-1.06zm10 0a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0M13.25 9H8a6 6 0 1 0 6 6h3.789a4 4 0 0 0 2.219-.672l1.101-.734A2 2 0 0 0 22 11.93V11a2 2 0 0 0-2-2h-5.25v2a.75.75 0 0 1-1.5 0zM10 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWhistle;
