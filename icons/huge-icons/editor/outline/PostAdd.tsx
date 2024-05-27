import * as React from "react";
import type { SVGProps } from "react";
const SvgPostAdd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 9.361V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h6.446"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8 7h4M8 12h8M8 17h8M18 2v6M21 5h-6"
    />
  </svg>
);
export default SvgPostAdd;
