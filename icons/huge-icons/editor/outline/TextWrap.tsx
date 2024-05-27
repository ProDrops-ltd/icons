import * as React from "react";
import type { SVGProps } from "react";
const SvgTextWrap = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 17h4a3 3 0 0 0 3-3v0a3 3 0 0 0-3-3H5m7 6 2-2m-2 2 2 2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5 17h4M5 5h14"
    />
  </svg>
);
export default SvgTextWrap;
