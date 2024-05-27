import * as React from "react";
import type { SVGProps } from "react";
const SvgHeading = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 4.25a.75.75 0 0 1 .75.75v6.25h10.5V5a.75.75 0 0 1 1.5 0v14a.75.75 0 0 1-1.5 0v-6.25H6.75V19a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 6 4.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHeading;
