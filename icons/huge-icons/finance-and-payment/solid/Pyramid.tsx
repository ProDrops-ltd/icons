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
      fillRule="evenodd"
      d="m20.29 13-2.608-4.5H6.318L3.71 13zm.869 1.5H2.841l-.435.75c-1.162 2.005.307 4.5 2.649 4.5h13.89c2.342 0 3.81-2.495 2.649-4.5zm-6.51-11.234L16.813 7H7.187l2.165-3.734c1.17-2.021 4.125-2.021 5.297 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPyramid;
