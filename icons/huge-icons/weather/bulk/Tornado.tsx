import * as React from "react";
import type { SVGProps } from "react";
const SvgTornado = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.25 20a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.25 12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.25 8A.75.75 0 0 1 8 7.25h14a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 8"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.25 4A.75.75 0 0 1 2 3.25h18a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 4"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgTornado;
