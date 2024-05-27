import * as React from "react";
import type { SVGProps } from "react";
const SvgFontSize1 = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M4 5h12M14 12h6M10 5v14M17 12v7"
    />
  </svg>
);
export default SvgFontSize1;
