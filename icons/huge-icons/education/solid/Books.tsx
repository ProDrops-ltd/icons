import * as React from "react";
import type { SVGProps } from "react";
const SvgBooks = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.25 3.75A.75.75 0 0 1 2 3h13a3 3 0 1 1 0 6h7a.75.75 0 0 1 0 1.5h-2v3h2a.75.75 0 0 1 0 1.5h-7a3 3 0 1 1 0 6H2a.75.75 0 0 1 0-1.5h2v-3H2A.75.75 0 0 1 2 15h7a3 3 0 1 1 0-6H2a.75.75 0 0 1 0-1.5h2v-3H2a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBooks;
