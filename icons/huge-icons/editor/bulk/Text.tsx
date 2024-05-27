import * as React from "react";
import type { SVGProps } from "react";
const SvgText = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.25 5A.75.75 0 0 1 6 4.25h12a.75.75 0 0 1 0 1.5h-5.25V19a.75.75 0 0 1-1.5 0V5.75H6A.75.75 0 0 1 5.25 5"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgText;
