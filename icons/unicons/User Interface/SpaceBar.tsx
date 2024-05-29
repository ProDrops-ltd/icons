import * as React from "react";
import type { SVGProps } from "react";
const SvgSpaceBar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 9a1 1 0 0 0-1 1v3H4v-3a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1"
    />
  </svg>
);
export default SvgSpaceBar;
