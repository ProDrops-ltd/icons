import * as React from "react";
import type { SVGProps } from "react";
const SvgFileSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 22a4 4 0 0 0 3.877-3.01c.136-.535.57-.99 1.123-.99h7V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v13a4 4 0 0 0 4 4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M18 22a4 4 0 0 0 3.877-3.01c.136-.535-.325-.99-.877-.99H11c-.552 0-.987.455-1.123.99A4 4 0 0 1 6 22z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.5 7.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M7.25 9.5a3.25 3.25 0 1 1 1.544 2.767L7.53 13.53a.75.75 0 0 1-1.06-1.06l1.263-1.264A3.24 3.24 0 0 1 7.25 9.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFileSearch;
