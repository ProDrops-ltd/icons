import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.97 16.97a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19m0-14.25a.75.75 0 0 1 .75.75v3.25h3.25a.75.75 0 0 1 0 1.5h-3.25v3.25a.75.75 0 0 1-1.5 0v-3.25H7.5a.75.75 0 0 1 0-1.5h3.25V7.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSearchPlus;
