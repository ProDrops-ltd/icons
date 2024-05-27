import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectionLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17 7-4 5 4 5M11 7l-4 5 4 5"
    />
  </svg>
);
export default SvgDirectionLeft;
