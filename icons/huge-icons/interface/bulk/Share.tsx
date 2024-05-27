import * as React from "react";
import type { SVGProps } from "react";
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.04 5.73a.75.75 0 0 1-.336 1.006L7.177 12l10.527 5.264a.75.75 0 1 1-.67 1.341L6.296 13.236A.75.75 0 0 1 6.138 12a.75.75 0 0 1 .157-1.236l10.738-5.37a.75.75 0 0 1 1.007.336"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M22 5.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M22 18.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M9 12a3.5 3.5 0 1 1-6.998 0A3.5 3.5 0 0 1 9 12"
    />
  </svg>
);
export default SvgShare;
