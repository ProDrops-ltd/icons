import * as React from "react";
import type { SVGProps } from "react";
const SvgTemperatureMinus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.75 4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M12 22a5 5 0 0 0 3-9V5a3 3 0 1 0-6 0v8a5 5 0 0 0 3 9"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.75 13a.75.75 0 0 0-1.5 0v2.145a2 2 0 1 0 1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTemperatureMinus;
