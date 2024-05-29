import * as React from "react";
import type { SVGProps } from "react";
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      d="M21.71 16.29a1 1 0 0 0-1.42 0L18 18.59V9a3 3 0 0 0-3-3H5.41l2.3-2.29a1.004 1.004 0 1 0-1.42-1.42l-4 4a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l4 4a1 1 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L5.41 8H15a1 1 0 0 1 1 1v9.59l-2.29-2.3a1.003 1.003 0 1 0-1.42 1.42l4 4q.144.138.33.21a.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l4-4a1 1 0 0 0 0-1.42"
    />
  </svg>
);
export default SvgArrow;
