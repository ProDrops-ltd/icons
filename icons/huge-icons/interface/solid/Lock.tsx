import * as React from "react";
import type { SVGProps } from "react";
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.75 6.75a3.25 3.25 0 0 1 6.5 0V8h-6.5zm-1.5 1.32V6.75a4.75 4.75 0 0 1 9.5 0v1.32A4 4 0 0 1 20 12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6c0-1.953 1.4-3.579 3.25-3.93M14 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLock;
