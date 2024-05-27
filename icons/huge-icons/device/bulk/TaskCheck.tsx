import * as React from "react";
import type { SVGProps } from "react";
const SvgTaskCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 18V6a4 4 0 0 1 4-4h7l7 7v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4"
      opacity={0.4}
    />
    <path fill="currentColor" d="M14 5V2l7 7h-3a4 4 0 0 1-4-4" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.494 11.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTaskCheck;
