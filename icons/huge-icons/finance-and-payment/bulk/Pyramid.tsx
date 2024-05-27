import * as React from "react";
import type { SVGProps } from "react";
const SvgPyramid = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.594 16.5 14.648 4.516c-1.17-2.021-4.125-2.021-5.296 0L2.406 16.5c-1.162 2.005.307 4.5 2.649 4.5h13.89c2.342 0 3.81-2.495 2.649-4.5"
      opacity={0.4}
    />
    <path fill="currentColor" d="m20.724 15-3.477-6H6.753l-3.477 6z" />
  </svg>
);
export default SvgPyramid;
