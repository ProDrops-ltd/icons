import * as React from "react";
import type { SVGProps } from "react";
const SvgAppsCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6m10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-7-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0m7-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAppsCircle;
