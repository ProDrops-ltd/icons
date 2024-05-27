import * as React from "react";
import type { SVGProps } from "react";
const SvgPreviousArrow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.03 14.333v1.185c0 1.543-1.674 2.505-3.007 1.727l-4.992-2.912v1.185c0 1.543-1.675 2.505-3.008 1.727l-6.03-3.518c-1.324-.771-1.324-2.683 0-3.455l6.03-3.518c1.333-.777 3.008.184 3.008 1.728v1.185l4.992-2.913c1.333-.777 3.008.184 3.008 1.728v5.851"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPreviousArrow;
