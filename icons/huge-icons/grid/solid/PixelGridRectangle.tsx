import * as React from "react";
import type { SVGProps } from "react";
const SvgPixelGridRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M4 2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h.25v8H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-.25h8V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-.25V8H20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v.25H8V4a2 2 0 0 0-2-2zm4 3.75V6a2 2 0 0 1-2 2h-.25v8H6a2 2 0 0 1 2 2v.25h8V18a2 2 0 0 1 2-2h.25V8H18a2 2 0 0 1-2-2v-.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPixelGridRectangle;
