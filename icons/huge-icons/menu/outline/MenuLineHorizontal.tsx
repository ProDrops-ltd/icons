import * as React from "react";
import type { SVGProps } from "react";
const SvgMenuLineHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 8h10M7 12h10M7 16h10"
    />
  </svg>
);
export default SvgMenuLineHorizontal;
