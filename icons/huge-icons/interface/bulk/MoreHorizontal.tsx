import * as React from "react";
import type { SVGProps } from "react";
const SvgMoreHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12.75 12.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5"
    />
    <path
      fill="currentColor"
      d="M17.25 12.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M7.75 12.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5"
      opacity={0.4}
    />
  </svg>
);
export default SvgMoreHorizontal;
