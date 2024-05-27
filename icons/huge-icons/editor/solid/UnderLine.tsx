import * as React from "react";
import type { SVGProps } from "react";
const SvgUnderLine = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.75 4a.75.75 0 0 0-1.5 0v7a5.75 5.75 0 0 0 11.5 0V4a.75.75 0 0 0-1.5 0v7a4.25 4.25 0 0 1-8.5 0zM5 19.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUnderLine;
