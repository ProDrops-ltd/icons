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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14c0 1.648-1.881 2.589-3.2 1.6l-3.6-2.7a2 2 0 0 0-2.4 0l-3.6 2.7c-1.318.989-3.2.048-3.2-1.6Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 8h16"
    />
  </svg>
);
export default SvgBookmark;
