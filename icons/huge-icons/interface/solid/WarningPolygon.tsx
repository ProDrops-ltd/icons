import * as React from "react";
import type { SVGProps } from "react";
const SvgWarningPolygon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.922 2.571a4.07 4.07 0 0 1 4.156 0l4.844 2.868C20.208 6.201 21 7.61 21 9.132v5.736c0 1.523-.792 2.931-2.078 3.693l-4.844 2.868a4.07 4.07 0 0 1-4.156 0L5.078 18.56C3.792 17.799 3 16.39 3 14.868V9.132c0-1.523.792-2.931 2.078-3.693zM11 17a1 1 0 1 1 2 0 1 1 0 0 1-2 0m.25-3a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWarningPolygon;
