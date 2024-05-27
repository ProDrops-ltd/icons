import * as React from "react";
import type { SVGProps } from "react";
const SvgCalculator = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 22a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.25 6A.75.75 0 0 1 8 5.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M8.75 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M12.75 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M16.75 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M8.75 14a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M12.75 14a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M16.75 14a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M8.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M12.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M16.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
    />
  </svg>
);
export default SvgCalculator;
