import * as React from "react";
import type { SVGProps } from "react";
const SvgMouse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 5V2m0 8V8m0 14a7 7 0 0 1-7-7V9a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v6a7 7 0 0 1-7 7"
    />
  </svg>
);
export default SvgMouse;
