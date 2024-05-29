import * as React from "react";
import type { SVGProps } from "react";
const SvgRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#000" d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2" />
  </svg>
);
export default SvgRemove;
