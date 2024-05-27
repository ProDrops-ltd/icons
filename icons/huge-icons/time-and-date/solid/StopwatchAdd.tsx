import * as React from "react";
import type { SVGProps } from "react";
const SvgStopwatchAdd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3.75c-.97 0-1.908.135-2.796.386a.75.75 0 1 1-.408-1.444A11.8 11.8 0 0 1 12 2.25c1.11 0 2.185.154 3.204.442a.75.75 0 1 1-.408 1.444A10.3 10.3 0 0 0 12 3.75m6 13.5a.75.75 0 0 1 .75.75v1.25H20a.75.75 0 0 1 0 1.5h-1.25V22a.75.75 0 0 1-1.5 0v-1.25H16a.75.75 0 0 1 0-1.5h1.25V18a.75.75 0 0 1 .75-.75M3.5 13.5A8.5 8.5 0 0 0 14 21.763V20a4 4 0 0 1 4-4h2.126A8.5 8.5 0 1 0 3.5 13.5M12.75 9a.75.75 0 0 0-1.5 0v3.7a1.5 1.5 0 1 0 1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStopwatchAdd;
