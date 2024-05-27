import * as React from "react";
import type { SVGProps } from "react";
const SvgTextSpacing = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 5h10M12 5v8"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7 15-2 2m0 0 2 2m-2-2h14m0 0-2-2m2 2-2 2"
    />
  </svg>
);
export default SvgTextSpacing;
