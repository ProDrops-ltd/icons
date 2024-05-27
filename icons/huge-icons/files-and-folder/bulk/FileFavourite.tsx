import * as React from "react";
import type { SVGProps } from "react";
const SvgFileFavourite = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 22a4 4 0 0 0 3.877-3.01c.136-.535-.325-.99-.877-.99H11c-.552 0-.987.455-1.123.99A4 4 0 0 1 6 22zM7.365 9.706l1.854 2.318a1 1 0 0 0 1.562 0l1.854-2.318c.236-.295.365-.662.365-1.04V8.59a1.591 1.591 0 0 0-2.716-1.125L10 7.75l-.284-.284A1.591 1.591 0 0 0 7 8.591v.075c0 .378.129.745.365 1.04"
    />
  </svg>
);
export default SvgFileFavourite;
