import * as React from "react";
import type { SVGProps } from "react";
const SvgEarnings = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 16a2 2 0 1 0-4 0 2 2 0 0 0 4 0M10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.25 4a.75.75 0 0 1 .75-.75h4A2.75 2.75 0 0 1 20.75 6v4a.75.75 0 0 1-1.5 0V6q0-.09-.012-.177L4.53 20.53a.75.75 0 0 1-1.06-1.06L18.177 4.762A1 1 0 0 0 18 4.75h-4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEarnings;
