import * as React from "react";
import type { SVGProps } from "react";
const SvgNextArrow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.985 14.333v1.185c0 1.543 1.674 2.505 3.007 1.727l4.993-2.912v1.185c0 1.543 1.674 2.505 3.007 1.727l6.031-3.518c1.323-.771 1.323-2.683 0-3.455l-6.03-3.518c-1.334-.777-3.008.184-3.008 1.728v1.185L5.992 6.754c-1.333-.777-3.007.184-3.007 1.728v5.851"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNextArrow;
