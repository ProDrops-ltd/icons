import * as React from "react";
import type { SVGProps } from "react";
const SvgStopwatchMinus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3.75c-.97 0-1.908.135-2.796.386a.75.75 0 1 1-.408-1.444A11.8 11.8 0 0 1 12 2.25c1.11 0 2.185.154 3.204.442a.75.75 0 1 1-.408 1.444A10.3 10.3 0 0 0 12 3.75M12 22a8.5 8.5 0 1 1 8.126-6H18a4 4 0 0 0-4 4v1.763A8.5 8.5 0 0 1 12 22m0-13.75a.75.75 0 0 1 .75.75v3.7a1.5 1.5 0 1 1-1.5 0V9a.75.75 0 0 1 .75-.75m8 11.5a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStopwatchMinus;
