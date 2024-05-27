import * as React from "react";
import type { SVGProps } from "react";
const SvgPresentationChart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.75 18v3.25H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25V18z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.5 6.75a.75.75 0 0 0-.75.75V8A2.75 2.75 0 0 1 7 10.75H6a.75.75 0 0 1 0-1.5h1c.69 0 1.25-.56 1.25-1.25v-.5a2.25 2.25 0 0 1 4.5 0v5a.75.75 0 0 0 1.5 0V12A2.75 2.75 0 0 1 17 9.25h1a.75.75 0 0 1 0 1.5h-1c-.69 0-1.25.56-1.25 1.25v.5a2.25 2.25 0 0 1-4.5 0v-5a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPresentationChart;
