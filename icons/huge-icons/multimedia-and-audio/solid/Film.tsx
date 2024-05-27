import * as React from "react";
import type { SVGProps } from "react";
const SvgFilm = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.25 2H6a4 4 0 0 0-4 4v.25h4.25zM2 7.75v3.5h4.25v-3.5zm0 5v3.5h4.25v-3.5zm0 5V18a4 4 0 0 0 4 4h.25v-4.25zM7.75 22h8.5v-9.25h-8.5zm10 0H18a4 4 0 0 0 4-4v-.25h-4.25zM22 16.25v-3.5h-4.25v3.5zm0-5v-3.5h-4.25v3.5zm0-5V6a4 4 0 0 0-4-4h-.25v4.25zM16.25 2h-8.5v9.25h8.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFilm;
