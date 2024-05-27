import * as React from "react";
import type { SVGProps } from "react";
const SvgBarcode = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.75 6A3.25 3.25 0 0 1 6 2.75h2a.75.75 0 0 0 0-1.5H6A4.75 4.75 0 0 0 1.25 6v2a.75.75 0 0 0 1.5 0zM16 1.25a.75.75 0 0 0 0 1.5h2A3.25 3.25 0 0 1 21.25 6v2a.75.75 0 0 0 1.5 0V6A4.75 4.75 0 0 0 18 1.25zM2.75 15.944a.75.75 0 0 0-1.5 0V18A4.75 4.75 0 0 0 6 22.75h2a.75.75 0 0 0 0-1.5H6A3.25 3.25 0 0 1 2.75 18zm20 0a.75.75 0 0 0-1.5 0V18A3.25 3.25 0 0 1 18 21.25h-2a.75.75 0 0 0 0 1.5h2A4.75 4.75 0 0 0 22.75 18zM7 11.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zm9-4.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m-3.25.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zM8 6.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 8 6.75m4.75 7.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zm3.25-.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m-7.25.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBarcode;