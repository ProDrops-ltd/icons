import * as React from "react";
import type { SVGProps } from "react";
const SvgCaret = (props: SVGProps<SVGSVGElement>) => (
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
      d="m19.5 11.13-14-8.08a1 1 0 0 0-1.5.87v16.16a1 1 0 0 0 1.5.87l14-8.08a1 1 0 0 0 0-1.74M6 18.35V5.65L17 12z"
    />
  </svg>
);
export default SvgCaret;
