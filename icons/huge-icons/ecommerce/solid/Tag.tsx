import * as React from "react";
import type { SVGProps } from "react";
const SvgTag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.397 5.582A4.08 4.08 0 0 0 5 8.661v9.285C5 20.185 6.79 22 9 22h6c2.21 0 4-1.815 4-4.054V8.66c0-1.184-.51-2.308-1.397-3.079l-3-2.606a3.96 3.96 0 0 0-5.206 0zM12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTag;
