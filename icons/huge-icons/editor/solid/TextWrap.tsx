import * as React from "react";
import type { SVGProps } from "react";
const SvgTextWrap = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 4.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zm11 6a3.75 3.75 0 1 1 0 7.5h-2.19l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 1 1 1.06 1.06l-.72.72H16a2.25 2.25 0 0 0 0-4.5H5a.75.75 0 0 1 0-1.5zM4.25 17a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTextWrap;
