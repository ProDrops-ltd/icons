import * as React from "react";
import type { SVGProps } from "react";
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.121 9.879 9.878 14.12M10.334 7 12 5.333a4.714 4.714 0 0 1 6.667 0v0a4.714 4.714 0 0 1 0 6.667L17 13.667M13.667 17 12 18.667a4.714 4.714 0 0 1-6.667 0v0a4.714 4.714 0 0 1 0-6.667L7 10.333"
    />
  </svg>
);
export default SvgLink;
