import * as React from "react";
import type { SVGProps } from "react";
const SvgInputCursorMove = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17 14 2-2-2-2M7 10l-2 2 2 2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 5h4M12 5v14M10 19h4"
    />
  </svg>
);
export default SvgInputCursorMove;
