import * as React from "react";
import type { SVGProps } from "react";
const SvgBoard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10H3z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 16.25a.75.75 0 0 1 .75.75v3.25H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25V17a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22.75 17a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h20a.75.75 0 0 1 .75.75M16.75 8a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 .75.75M12.75 12a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBoard;
