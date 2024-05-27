import * as React from "react";
import type { SVGProps } from "react";
const SvgDrive = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.192 14.5 15 3H9l3 5.4 3.389 6.1zM8.155 4.568 2 16l3 5 2.778-5 3.364-6.056zM19 21H6.716l2.778-5H22z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDrive;
