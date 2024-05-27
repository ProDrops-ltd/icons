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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 15h11a3 3 0 1 1 0 6H4m0-6v6m0-6H2m2 6H2M4 3h11a3 3 0 1 1 0 6H4m0-6v6m0-6H2m2 6H2m18 0H9a3 3 0 1 0 0 6h11m0-6v6m0-6h2m-2 6h2"
    />
  </svg>
);
export default SvgBooks;
