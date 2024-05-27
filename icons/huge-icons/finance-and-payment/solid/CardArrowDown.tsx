import * as React from "react";
import type { SVGProps } from "react";
const SvgCardArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22.305 6.25A4 4 0 0 0 18.375 3h-12a4 4 0 0 0-3.93 3.25zm.07 1.5v2.5h-20v-2.5zm-20 4h20V14a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1h-7a4 4 0 0 1-4-4zm5 5.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10.53 1.884.72.72V17a.75.75 0 0 1 1.5 0v2.604l.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0l-1.293-1.292a.75.75 0 1 1 1.06-1.061"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCardArrowDown;
