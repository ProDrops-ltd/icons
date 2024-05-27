import * as React from "react";
import type { SVGProps } from "react";
const SvgGraphicEq = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7A.75.75 0 0 1 8 6.25M16 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 4 9.25M20 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgGraphicEq;
