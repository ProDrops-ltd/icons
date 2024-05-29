import * as React from "react";
import type { SVGProps } from "react";
const SvgReload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      d="M21 11a1 1 0 0 0-1 1 8.05 8.05 0 1 1-2.22-5.5h-2.4a1 1 0 1 0 0 2h4.53a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1.77A10 10 0 1 0 22 12a1 1 0 0 0-1-1"
    />
  </svg>
);
export default SvgReload;
