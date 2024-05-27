import * as React from "react";
import type { SVGProps } from "react";
const SvgMultiplyRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.641 8.641a.75.75 0 0 1 1.061 0L12 10.94l2.298-2.298a.75.75 0 1 1 1.06 1.06L13.062 12l2.298 2.298a.75.75 0 0 1-1.06 1.06L12 13.06 9.702 15.36a.75.75 0 1 1-1.06-1.061L10.94 12 8.64 9.702a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMultiplyRectangle;
