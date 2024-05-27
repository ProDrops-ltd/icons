import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowSortRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4M8.47 7.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V16a.75.75 0 0 1-1.5 0V9.81l-.72.72a.75.75 0 1 1-1.06-1.06zm4 7.06 2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V8a.75.75 0 0 0-1.5 0v6.19l-.72-.72a.75.75 0 1 0-1.06 1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowSortRectangle;
