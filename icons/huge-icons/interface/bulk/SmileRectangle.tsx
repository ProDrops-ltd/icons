import * as React from "react";
import type { SVGProps } from "react";
const SvgSmileRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M17 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.495 14.436a.75.75 0 0 0-.993 1.125L9 15l-.498.56v.001l.002.001.002.003.006.005.018.015.056.045q.07.056.19.142c.163.113.396.259.694.403a5.8 5.8 0 0 0 2.53.575 5.8 5.8 0 0 0 2.53-.575 5 5 0 0 0 .885-.545l.055-.045.018-.015.006-.005.002-.003h.001S15.498 15.56 15 15l.498.56a.75.75 0 0 0-.992-1.124h-.001l-.024.02a3.654 3.654 0 0 1-.606.37A4.3 4.3 0 0 1 12 15.25a4.3 4.3 0 0 1-1.876-.425 3.7 3.7 0 0 1-.606-.37l-.022-.017zm5.01 0-.002.002z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSmileRectangle;
