import * as React from "react";
import type { SVGProps } from "react";
const SvgSearch2 = (props: SVGProps<SVGSVGElement>) => (
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
    <circle
      cx={9.5}
      cy={9.5}
      r={9.5}
      fill="currentColor"
      transform="matrix(1 0 0 -1 2 21)"
    />
  </svg>
);
export default SvgSearch2;
