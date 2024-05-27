import * as React from "react";
import type { SVGProps } from "react";
const SvgDiploma = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.5 22v-4.5h5V22L12 20.5zM20 12V6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4"
      opacity={0.4}
    />
    <path fill="currentColor" d="M15 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.25 6A.75.75 0 0 1 8 5.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6M7.25 10A.75.75 0 0 1 8 9.25h4a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDiploma;
