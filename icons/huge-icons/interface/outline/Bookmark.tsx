import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 7h16M4 4v14c0 1.648 1.882 2.589 3.2 1.6l3.6-2.7a2 2 0 0 1 2.4 0l3.6 2.7c1.319.989 3.2.048 3.2-1.6V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"
    />
  </svg>
);
export default SvgBookmark;
