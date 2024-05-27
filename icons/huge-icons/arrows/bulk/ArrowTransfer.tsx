import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowTransfer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.693 10.287a.75.75 0 0 1-.693.463H8a.75.75 0 0 1 0-1.5h6.19l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 .163.817M7.307 13.713A.75.75 0 0 1 8 13.25h8a.75.75 0 0 1 0 1.5H9.81l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1-.163-.817"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowTransfer;
