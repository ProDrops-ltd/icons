import * as React from "react";
import type { SVGProps } from "react";
const SvgUserCircleAdd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 11a9 9 0 1 0-18 0 9 9 0 0 0 18 0"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.87 13.75c-1.072.003-2.137.296-3.563.934a.75.75 0 1 1-.614-1.368c1.52-.681 2.805-1.062 4.172-1.066 1.361-.004 2.73.367 4.418 1.056a.75.75 0 1 1-.566 1.388c-1.612-.657-2.77-.947-3.848-.944"
      clipRule="evenodd"
    />
    <circle
      cx={3}
      cy={3}
      r={3}
      fill="currentColor"
      transform="matrix(1 0 0 -1 8 11)"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.75 16a.75.75 0 0 0-1.5 0v1.25H16a.75.75 0 0 0 0 1.5h1.25V20a.75.75 0 0 0 1.5 0v-1.25H20a.75.75 0 0 0 0-1.5h-1.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUserCircleAdd;
