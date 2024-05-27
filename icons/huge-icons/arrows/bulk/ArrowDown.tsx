import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.47 18.53a.75.75 0 0 0 1.06 0l4-4a.75.75 0 1 0-1.06-1.06l-2.72 2.72V6a.75.75 0 0 0-1.5 0v10.19l-2.72-2.72a.75.75 0 0 0-1.06 1.06z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12.53 18.53a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l3.468 3.5 3.472-3.5a.75.75 0 1 1 1.06 1.06z"
    />
  </svg>
);
export default SvgArrowDown;
