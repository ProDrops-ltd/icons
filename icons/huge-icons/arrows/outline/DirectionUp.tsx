import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectionUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="m7 17 5-4 5 4M7 11l5-4 5 4"
    />
  </svg>
);
export default SvgDirectionUp;
