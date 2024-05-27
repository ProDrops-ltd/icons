import * as React from "react";
import type { SVGProps } from "react";
const SvgFlashOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.5 10.5H19l-2.5 3L10 7l4-5v8.5z"
      opacity={0.4}
    />
    <path fill="currentColor" d="M10 13.5H5l3.732-4.768 6.536 6.537L10 22z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.47 3.47a.75.75 0 0 1 1.06 0l16 16a.75.75 0 1 1-1.06 1.06l-16-16a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFlashOff;
