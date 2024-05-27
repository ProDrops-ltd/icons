import * as React from "react";
import type { SVGProps } from "react";
const SvgCopyCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-4.992v-4H8z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 8a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4zm6.565 5.683a.75.75 0 0 0-1.13-.987l-2.87 3.28a.25.25 0 0 1-.344.03L6.47 14.604a.75.75 0 0 0-.937 1.171l1.752 1.402a1.75 1.75 0 0 0 2.41-.214z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCopyCheck;
