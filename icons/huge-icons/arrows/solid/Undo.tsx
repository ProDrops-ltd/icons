import * as React from "react";
import type { SVGProps } from "react";
const SvgUndo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3.75A8.25 8.25 0 1 1 3.75 12a.75.75 0 0 0-1.5 0c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25a9.72 9.72 0 0 0-7.046 3.01V3a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75h4.421a.75.75 0 0 0 0-1.5h-2.99a8.23 8.23 0 0 1 6.365-3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUndo;
