import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.47 11.47a.75.75 0 0 0 0 1.06l4 4a.75.75 0 1 0 1.06-1.06l-2.72-2.72H18a.75.75 0 0 0 0-1.5H7.81l2.72-2.72a.75.75 0 1 0-1.06-1.06z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M5.47 12.53a.75.75 0 0 1 0-1.06l4-4a.75.75 0 1 1 1.06 1.06l-3.5 3.468 3.5 3.472a.75.75 0 1 1-1.06 1.06z"
    />
  </svg>
);
export default SvgArrowLeft;
