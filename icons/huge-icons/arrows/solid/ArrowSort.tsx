import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowSort = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M10.287 7.307A.75.75 0 0 1 10.75 8v8a.75.75 0 0 1-1.5 0V9.81l-.72.72a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 .817-.163M13.25 16a.75.75 0 0 0 1.28.53l2-2a.75.75 0 0 0-1.06-1.06l-.72.72V8a.75.75 0 0 0-1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowSort;
