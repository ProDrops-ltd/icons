import * as React from "react";
import type { SVGProps } from "react";
const SvgPowerRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 6.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.6 7.55a.75.75 0 0 1-.15 1.05 4.25 4.25 0 1 0 5.1 0 .75.75 0 0 1 .9-1.2 5.75 5.75 0 1 1-6.9 0 .75.75 0 0 1 1.05.15"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPowerRectangle;
