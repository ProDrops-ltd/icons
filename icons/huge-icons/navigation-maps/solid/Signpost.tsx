import * as React from "react";
import type { SVGProps } from "react";
const SvgSignpost = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.5 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-2 10H5.414a1 1 0 0 1-.707-.293l-2-2a1 1 0 0 1 0-1.414l2-2A1 1 0 0 1 5.414 6H9.5zm5 0H19l3 3-3 3h-4.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSignpost;
