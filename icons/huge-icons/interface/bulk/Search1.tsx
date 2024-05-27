import * as React from "react";
import type { SVGProps } from "react";
const SvgSearch1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle
      cx={11.5}
      cy={11.5}
      r={9.5}
      fill="currentColor"
      transform="rotate(180 11.5 11.5)"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.47 19.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgSearch1;
