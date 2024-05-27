import * as React from "react";
import type { SVGProps } from "react";
const SvgIn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 2.25A4.75 4.75 0 0 0 2.25 7v10A4.75 4.75 0 0 0 7 21.75h4A4.75 4.75 0 0 0 15.75 17v-.5a.75.75 0 0 0-1.5 0v.5A3.25 3.25 0 0 1 11 20.25H7A3.25 3.25 0 0 1 3.75 17V7A3.25 3.25 0 0 1 7 3.75h4A3.25 3.25 0 0 1 14.25 7v.5a.75.75 0 0 0 1.5 0V7A4.75 4.75 0 0 0 11 2.25zm4.47 6.22a.75.75 0 1 1 1.06 1.06l-1.72 1.72H21a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIn;
