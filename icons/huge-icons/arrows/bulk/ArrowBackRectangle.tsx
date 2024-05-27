import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBackRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M10.53 6.47a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H13a2.25 2.25 0 0 1 0 4.5H8a.75.75 0 0 0 0 1.5h5a3.75 3.75 0 1 0 0-7.5H9.81l.72-.72a.75.75 0 0 0 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowBackRectangle;
